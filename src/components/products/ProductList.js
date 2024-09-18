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
    <section id="catalogue" className="bg-slate-50 py-12 px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative">
            Catálogo
            <span className="block w-8/12 h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 absolute left-1/2 transform -translate-x-1/2 bottom-[-14px]"></span>
            </h2>
        </div>

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
