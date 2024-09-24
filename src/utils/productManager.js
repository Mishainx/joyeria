export const createProduct = async (productData) => {
    try {
      // Serializar el objeto productData a JSON
      const jsonProductData = JSON.stringify(productData);
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonProductData,
      });
  
      if (!response.ok) {
        // Obtener detalles del error del cuerpo de la respuesta
        const errorData = await response.json();
        const errorMessage = errorData.error || "Error al crear el producto";
        throw new Error(errorMessage);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };
  

  export const handleImage = async(file) =>{
    const storageRef = ref(storage,values.slug)
    const fileSnapshot = await uploadBytes(storageRef,file)
    const fileUrl = await getDownloadURL(fileSnapshot.ref)
    return fileUrl
}

// Función para obtener el producto por slug
export const fetchProductBySlug = async (slug) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/slug/${slug}`);
  if (!response.ok) {
    throw new Error('Producto no encontrado');
  }
  const data = await response.json();
  return data.product; // Asegúrate de que el campo sea correcto
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`); // Ajusta la URL según sea necesario
    console.log("acá")
    
    if (!response.ok){
      throw new Error('Error al cargar productos');
    } 
    const data = await response.json();
    console.log("allá")
    return data.payload || [];
  } catch (error) {
    console.log("aqui")
    console.error('Error al obtener productos:', error);
    return [];
  }
};