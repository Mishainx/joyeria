"use client";

import { useEffect, useState } from 'react';
import { useCategories } from '@/src/context/categoriesContext';
import CategoryMenu from '../category/CategoryMenu';
import ProductCard from './ProductCard';

export default function CatalogueListProducts({ catalogueProducts }) {
  const { catalogueCategory, updateCatalogueCategory, categories } = useCategories();  // Accede al contexto
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Actualizar el estado local con la categoría del contexto
  useEffect(() => {
    if (catalogueCategory !== selectedCategory) {
      setSelectedCategory(catalogueCategory || 'all');  // Si no hay categoría, selecciona 'all'
    }
  }, [catalogueCategory]);  // Se ejecuta cuando cambia catalogueCategory

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === 'all'
      ? catalogueProducts
      : catalogueProducts.filter((product) => product.category === selectedCategory);

  // Función para manejar la selección de categoría en el catálogo
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateCatalogueCategory(category);  // Actualiza el estado global con la categoría seleccionada
  };

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
          onCategoryChange={handleCategoryChange}  // Actualiza el estado local y global al cambiar la categoría
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
