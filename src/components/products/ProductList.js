"use client";

import { useState } from 'react';
import CategoryMenu from '../category/CategoryMenu';
import ProductCard from './ProductCard';
import { useProducts } from '@/src/context/productContext';

export default function ProductList({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { products, loading, error } = useProducts();

  // Función para manejar la selección de categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === 'all'
      ? products.payload  
      : products.payload.filter((product) => product.category === selectedCategory);

  if (loading) {
    return <p className="text-center">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <section className="bg-slate-50 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">
          Catálogo
        </h2>
        <CategoryMenu
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No se encontraron productos en esta categoría.</p>
          )}
        </div>
      </div>
    </section>
  );
}
