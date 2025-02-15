import { NextResponse } from 'next/server';
import { storage } from '@/src/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { cookies } from 'next/headers';
import { authAdmin } from '@/src/firebase/authManager.js';

export const POST = async (req) => {
  try {
    // Obtener la cookie con el token
    const cookieStore = cookies();
    const cookie = cookieStore.get('vg-ct');

    if (!cookie || !cookie.value) {
      return NextResponse.json(
        { message: 'Unauthorized: No token provided' },
        { status: 401 }
      );
    }

    const token = cookie.value;

    // Verificar el token con Firebase Admin SDK
    let decodedToken;
    try {
      decodedToken = await authAdmin.verifyIdToken(token);
    } catch (error) {
      return NextResponse.json(
        { message: 'Unauthorized: Invalid token' },
        { status: 401 }
      );
    }

    // Obtener los datos del formulario enviado
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json(
        { message: 'Image file is required' },
        { status: 400 }
      );
    }

    // Subir la imagen a Firebase Storage
    const storageRef = ref(storage, `PopupImages/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);

    return NextResponse.json(
      {
        message: 'Image uploaded successfully',
        imageUrl,
        userId: decodedToken.uid, // Incluye información del usuario autenticado
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error uploading image', error: error.message },
      { status: 500 }
    );
  }
};
