
  // Función para manejar la eliminación de un producto
  export const handleDelete = (productId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      console.log(productId)
    }
  };