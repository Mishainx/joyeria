import { NextResponse } from 'next/server';
import { collection, getDocs,addDoc } from 'firebase/firestore';
import { db } from '@/src/firebase/config';
import { cookies } from "next/headers";
import { authAdmin } from '@/src/firebase/authManager.js';
import { validateProduct } from '@/src/utils/regExp';
import { generateUniqueSlug } from '@/src/utils/createSlug';
import { generateSequentialSku } from '@/src/utils/createSku';
import { categoryExists } from '@/src/utils/categoriesManager';
import { storage } from '@/src/firebase/config';
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';

export const GET = async (req) => {

  try {
    const productsSnapshot = await getDocs(collection(db, 'products'));
    const products = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      { message: 'success', payload:products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching products', error: error.message },
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

    // Obtener datos del producto del cuerpo de la solicitud
    const formData = await req.formData();
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const description = formData.get('description');
    const featured = formData.get('featured') === 'true';
    const visible = formData.get('visible') === 'true';
    const stock = formData.get('stock') === 'true';
    const file = formData.get('thumbnail');

    const productData = {
      name,
      category,
      price,
      description,
      featured,
      visible,
      stock,
      slug: '', // Se asignará después
      sku: '',  // Se asignará después
      img: ''   // Se asignará después
    };

    const validationErrors = validateProduct(productData);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { message: 'Validation errors', errors: validationErrors },
        { status: 400 }
      );
    }

        // Verificar si la categoría existe
        const categoryValid = await categoryExists(category);
    
        if (!categoryValid) {
          return NextResponse.json(
            { message: 'Invalid category' },
            { status: 400 }
          );
        }

    // Generar SKU y Slug
    const sku = await generateSequentialSku("products")
    const slug = await generateUniqueSlug(name)
    // Subir la imagen a Firebase Storage
    let img = '';
    if (file) {
      const storageRef = ref(storage, `ProductImg/${file.name}`);
      
      await uploadBytes(storageRef, file);
      img = await getDownloadURL(storageRef);
    }

      // Crear el producto en Firestore
      const productRef = await addDoc(collection(db, 'products'), {
        name,
        category,
        price: parseFloat(price), // Asegurarse de almacenar el precio como número
        description,
        featured,
        visible,
        stock,
        slug,
        sku,
        img
      });

    return NextResponse.json(
      { message: 'Product created successfully'},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating product', error: error.message },
      { status: 500 }
    );
  }
};