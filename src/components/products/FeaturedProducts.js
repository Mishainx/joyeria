"use client";

import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '@/src/context/productContext';
import ArrowIcon from '@/src/icons/ArrowIcon'; // Puedes usar un ícono de flecha para los botones

function FeaturedProducts() {
  const containerRef = useRef(null);
  const { products, loading, error } = useProducts();

  // Para manejar el desplazamiento manual en dispositivos móviles
  const touchStartX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX; 
      scrollStart.current = container.scrollLeft; 
    };

    const handleTouchMove = (e) => {
      const touchDelta = (e.touches[0].clientX - touchStartX.current) * 1.5; // Ajustar la sensibilidad
      container.scrollLeft = scrollStart.current - touchDelta; 
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [products]);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scroll({
        left: containerRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth' 
      });
    }
  };

  if (loading) return <p>Cargando productos destacados...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  const featuredProducts = products?.payload?.filter((product) => product.featured) || [];

  return (
    <section className="w-full mx-auto bg-slate-50 py-8 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 inline-block relative">
          Destacados
          <span className="block w-8/12 h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 absolute left-1/2 transform -translate-x-1/2 bottom-[-14px]"></span>
        </h2>
      </div>
      <div
        ref={containerRef}
        className="scroll-container scrollbar-custom p-5 flex space-x-4 overflow-x-auto lg:overflow-hidden lg:px-8"
      >
        <div className="flex space-x-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div key={product.id} className="inline-block min-w-[300px]">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>No hay productos destacados disponibles.</p>
          )}
        </div>
      </div>
      <button
        onClick={() => scroll(-300)}
        className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-darkGold text-white p-2 rounded-full shadow-lg z-10 lg:left-8"
      >
        <ArrowIcon width={20} height={20} className="rotate-180" />
      </button>
      <button
        onClick={() => scroll(300)}
        className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-darkGold text-white p-2 rounded-full shadow-lg z-10 lg:right-8"
      >
        <ArrowIcon width={20} height={20} />
      </button>
    </section>
  );
}

export default FeaturedProducts;
