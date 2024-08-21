import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/src/firebase/config';

// Función para crear un slug a partir del nombre
export function createSlug(name) {
    const lowerCaseName = name.toLowerCase();
    return lowerCaseName
        .replace(/[áàâãäå]/g, 'a')
        .replace(/[ç]/g, 'c')
        .replace(/[éèêë]/g, 'e')
        .replace(/[íìîï]/g, 'i')
        .replace(/[ñ]/g, 'n')
        .replace(/[óòôõö]/g, 'o')
        .replace(/[úùûü]/g, 'u')
        .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres no permitidos
        .trim() // Eliminar espacios al principio y al final
        .replace(/\s+/g, '-') // Reemplazar espacios por guiones
        .replace(/-+/g, '-'); // Reemplazar múltiples guiones por uno solo
}

// Función para verificar si el slug es único
export async function isSlugUnique(slug) {
    const productsQuery = query(collection(db, 'products'), where('slug', '==', slug));
    const snapshot = await getDocs(productsQuery);
    return snapshot.empty; // Retorna true si no hay documentos con el mismo slug
}

// Función que crea el slug y verifica si es único
export async function generateUniqueSlug(name) {
    const slug = createSlug(name);
    
    // Verificar si el slug ya existe
    if (!await isSlugUnique(slug)) {
        throw new Error('Slug already exists'); // Manejar el error según sea necesario
    }
    
    return slug;
}
