import { NextResponse } from 'next/server';
import { db } from '@/src/firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';

export const DELETE = async (req, { params }) => {
  const { id } = params;
  console.log(id)

  try {
    // Elimina el documento de la colección 'products'
    await deleteDoc(doc(db, 'products', id));

    return NextResponse.json(
      { message: 'Producto eliminado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error al eliminar el producto', error: error.message },
      { status: 500 }
    );
  }
};
