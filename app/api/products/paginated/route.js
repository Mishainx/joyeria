import { NextResponse } from 'next/server';
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '@/src/firebase/config';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const lastVisible = searchParams.get('lastVisible'); // ID del último documento visible
  const pageSize = parseInt(searchParams.get('pageSize')) || 10; // Número de productos por página
  const orderField = searchParams.get('orderBy') || 'name'; // Campo por el cual ordenar (por defecto por nombre)
  const orderDirection = searchParams.get('orderDirection') === 'desc' ? 'desc' : 'asc'; // Orden (ascendente o descendente)

  try {
    const productsRef = collection(db, 'products');
    let productsQuery;

    // Crea la consulta dependiendo de si hay un último documento visible
    if (lastVisible) {
      const lastVisibleDoc = await db.collection('products').doc(lastVisible).get();
      productsQuery = query(
        productsRef,
        orderBy(orderField, orderDirection),
        startAfter(lastVisibleDoc),
        limit(pageSize)
      );
    } else {
      productsQuery = query(productsRef, orderBy(orderField, orderDirection), limit(pageSize));
    }

    const querySnapshot = await getDocs(productsQuery);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Obtén el último documento visible para la siguiente página
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    const lastVisibleId = lastVisibleDoc ? lastVisibleDoc.id : null;

    return NextResponse.json(
      { message: 'success', payload: products, lastVisible: lastVisibleId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching products', error: error.message },
      { status: 500 }
    );
  }
};
