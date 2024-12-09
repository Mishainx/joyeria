import { NextResponse } from 'next/server';
import { db } from '@/src/firebase/config';
import { doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/src/firebase/config';
import { generateUniqueSlug } from '@/src/utils/createSlug'; // Asegúrate de tener esta función disponible

export const GET = async (req, { params }) => {
  const { id } = await params;

  try {
    // Obtiene el documento de la colección 'products'
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(
        { product: docSnap.data() },
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

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const formData = await req.formData();

  try {
    // Obtener el documento del producto actual
    const productDoc = await getDoc(doc(db, 'products', id));
    if (!productDoc.exists()) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    const currentData = productDoc.data(); // Obtenemos los datos actuales del producto
    const updates = {};
    
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const description = formData.get('description');
    const featured = formData.get('featured');
    const visible = formData.get('visible');
    const stock = formData.get('stock');
    const file = formData.get('thumbnail');

    // Actualizamos solo los campos que han cambiado
    if (name && name !== currentData.name) {
      updates.name = name;

      // Generar y añadir el nuevo slug solo si el nombre cambia
      const newSlug = await generateUniqueSlug(name);
      updates.slug = newSlug;
    }
    if (category && category !== currentData.category) updates.category = category;
    if (price && parseFloat(price) !== currentData.price) updates.price = parseFloat(price);
    if (description && description !== currentData.description) updates.description = description;
    if (featured !== null && featured !== undefined) updates.featured = featured === 'true'; // Convertir a booleano
    if (visible !== null && visible !== undefined) updates.visible = visible === 'true'; // Convertir a booleano
    if (stock !== null && stock !== undefined) updates.stock = stock === 'true'; // Convertir a booleano

    // Subir la imagen a Firebase Storage si existe
    if (file && file.size > 0) { // Verificar si se ha seleccionado un archivo válido
      const storageRef = ref(storage, `ProductImg/${file.name}`);
      await uploadBytes(storageRef, file);
      const img = await getDownloadURL(storageRef);
      updates.img = img; // Añadir la URL de la imagen a las actualizaciones
    }

    // Si no hay cambios, devolvemos una respuesta indicando que no se realizaron actualizaciones
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: 'No changes detected' },
        { status: 400 }
      );
    }

    // Actualizar el documento en Firestore
    await updateDoc(doc(db, 'products', id), updates);

    return NextResponse.json(
      { message: 'Product updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: 'Error updating product', error: error.message },
      { status: 500 }
    );
  }
};


export const DELETE = async (req, { params }) => {
  const { id } = await params;

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
