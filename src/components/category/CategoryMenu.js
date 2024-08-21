import { useEffect, useState } from 'react';
import { fetchCategories } from '@/src/utils/categoriesManager';
import CategoryButton from './CategoryButton';

export default function CategoryMenu({ onCategoryChange, categories }) {

  return (
    <div className="text-center mb-8">
      <div className="flex overflow-x-auto gap-4 scrollbar-hide p-4 justify-center items-center scrollbar-custom">
        <CategoryButton
          onSelect={() => onCategoryChange('all')}
          category={{
            name: 'all',
            title: 'Todos',
            img: '/img/categoryMenu/all-category.png', // Ruta del icono para el botón "Todos"
          }}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            onSelect={() => onCategoryChange(category.sku)}
            category={category} // Se pasa el objeto de la categoría completo
          />
        ))}
      </div>
    </div>
  );
}
