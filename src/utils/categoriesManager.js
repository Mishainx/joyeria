// src/utils/api.js
export async function fetchCategories() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`); // Usando la URL desde la variable de entorno
      if (!res.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await res.json();
      return data.payload; // Asegúrate de devolver los datos según cómo estén estructurados
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  export async function categoryExists(sku) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
      if (!res.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await res.json();
  
      // Suponiendo que los datos de categorías están en `data.payload`
      const categories = data.payload;
      // Verificar si existe una categoría con el SKU proporcionado
      return categories.some(category => category.sku === sku);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return false;
    }
  }
  