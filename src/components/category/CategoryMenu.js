import CategoryButton from './CategoryButton';
import { useCategories } from '@/src/context/categoriesContext';

export default function CategoryMenu({ onCategoryChange }) {
  const {categories} = useCategories();

  return (
    <div className="text-center mb-8">
      <div className="flex overflow-x-auto overflow-y-hidden gap-6 px-8 py-2 pb-6 justify-start  items-center scrollbar-hide scrollbar-custom snap-x snap-mandatory md:justify-center">
        <div className="flex-shrink-0 snap-start">
          <CategoryButton
            onSelect={() => onCategoryChange('all')}
            category={{
              name: 'all',
              title: 'Todos',
              img: '/img/categoryMenu/all-category.png', // Ruta del icono para el botón "Todos"
            }}
          />
        </div>
        {categories?.map((category) => (
          <div key={category.title} className="flex-shrink-0 snap-start">
            <CategoryButton
              onSelect={() => onCategoryChange(category.sku)}
              category={category} // Se pasa el objeto de la categoría completo
            />
          </div>
        ))}
      </div>
    </div>
  );
}
