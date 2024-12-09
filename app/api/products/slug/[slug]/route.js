import { NextResponse } from 'next/server';
import { db } from '@/src/firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const GET = async (req, { params }) => {
  const { slug } = await params;

  try {
    // Consulta para buscar el producto con el slug dado
    const q = query(
      collection(db, 'products'),
      where('slug', '==', slug)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const productData = querySnapshot.docs[0].data();
      return NextResponse.json(
        { product: productData },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Producto no encontrado' },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al recuperar el producto', error: error.message },
      { status: 500 }
    );
  }
};
