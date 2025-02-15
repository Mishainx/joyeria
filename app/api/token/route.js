import { NextResponse } from 'next/server';
import { authAdmin } from '@/src/firebase/authManager'; // Importa la configuración del admin SDK

export async function POST(req) {
  try {
    let data;
    try {
      // Intentar parsear el JSON
      data = await req.json();
    } catch (jsonError) {
      return NextResponse.json(
        { message: 'Invalid JSON format', error: jsonError.message },
        { status: 400 }
      );
    }

    const { token } = data;

    if (!token) {
      return NextResponse.json(
        { message: 'Token not provided' },
        { status: 400 }
      );
    }

    // Verificar el token con Firebase Admin SDK
    let decodedToken;
    try {
      decodedToken = await authAdmin.verifyIdToken(token);
    } catch (error) {
      const response = NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );

      response.cookies.set('vg-ct', '', {
        httpOnly: true,
        path: '/',
        expires: new Date(0), // Expira en el pasado
      });

      return response;
    }

    return NextResponse.json(
      { message: 'Token is valid', user: decodedToken },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error processing request', error: error.message },
      { status: 500 }
    );
  }
}
