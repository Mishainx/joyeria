"use client"

import { createContext, useContext, useEffect, useState } from 'react';

// Crea el contexto
const ProductContext = createContext();

// Hook para usar el contexto fácilmente
export const useProducts = () => useContext(ProductContext);

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para hacer fetch de los productos desde la API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`); // Reemplaza con tu URL de API
      if (!response.ok) {
        throw new Error('Error al traer los productos');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      // Si la eliminación fue exitosa, refresca la lista de productos
      await fetchProducts(); // Vuelve a llamar la función para traer los productos actualizados

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading, error, deleteProduct,fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
