import { NextResponse } from 'next/server';
import { collection, addDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/src/firebase/config';
import { cookies } from "next/headers";
import { authAdmin } from '@/src/firebase/authManager.js';
import { generateSequentialSku } from '@/src/utils/createSku';

// `GET` para obtener los valores actuales de las categorias
export const GET = async (req) => {

    try {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const categories =categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return NextResponse.json(
        { message: 'success', payload:categories },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Error fetching categoriess', error: error.message },
        { status: 500 }
      );
    }
  };


export const POST = async (req) => {
  try {
    // Obtener las cookies y el token
    const cookieStore = cookies();
    const cookie = cookieStore.get("vg-ct");
    
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

    // Obtener datos de la categoría del cuerpo de la solicitud
    const categoryData = await req.json();

    // Validar los datos de la categoría
    if (!categoryData.title || typeof categoryData.title !== 'string') {
      return NextResponse.json(
        { message: 'Validation errors: Title is required and must be a string' },
        { status: 400 }
      );
    }

    // Generar SKU secuencial
    const sku = await generateSequentialSku('categories');
    categoryData.sku = sku;

    // Añadir el nuevo documento a la colección
    const docRef = await addDoc(collection(db, 'categories'), {
      title: categoryData.title,
      img: categoryData.img,
      sku: categoryData.sku,
    });

    return NextResponse.json(
      { message: 'Category created successfully', id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating category', error: error.message },
      { status: 500 }
    );
  }
};
