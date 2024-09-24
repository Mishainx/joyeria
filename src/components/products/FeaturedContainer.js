"use client";

import { useRef } from 'react';
import ProductCard from './ProductCard';
import ArrowIcon from '@/src/icons/ArrowIcon';

const FeaturedContainer = ({ featuredProducts }) => {
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e) => {
    containerRef.current.touchStartX = e.touches[0].clientX;
    containerRef.current.isScrolling = false; // Indica si se está desplazando
  };

  const handleTouchMove = (e) => {
    if (containerRef.current) {
      const touchMoveX = e.touches[0].clientX;
      const difference = containerRef.current.touchStartX - touchMoveX;

      // Solo desplazar si la diferencia es significativa
      if (Math.abs(difference) > 10) {
        containerRef.current.isScrolling = true; // Marca que se está desplazando
        containerRef.current.scrollBy({
          left: difference * 20, // Ajustar para que sea más suave
          behavior: 'smooth',
        });

        // Actualiza la posición inicial para el siguiente movimiento
        containerRef.current.touchStartX = touchMoveX;
      }
    }
  };

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="scroll-container scrollbar-custom p-5 flex space-x-4 overflow-x-auto lg:overflow-hidden lg:px-8"
      >
        <div className="flex space-x-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div key={product.id} className="inline-block min-w-[300px] text-center">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className='text-center'>No hay productos destacados disponibles.</p>
          )}
        </div>
      </div>
      {/* Botones ocultos en móviles */}
      <button
        onClick={() => scroll(-600)} // Aumentar el scrollOffset para desplazamiento más rápido
        className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 bg-darkGold text-white p-2 rounded-full shadow-lg z-10 lg:block"
      >
        <ArrowIcon width={20} height={20} className="rotate-180" />
      </button>
      <button
        onClick={() => scroll(600)} // Aumentar el scrollOffset para desplazamiento más rápido
        className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 bg-darkGold text-white p-2 rounded-full shadow-lg z-10 lg:block"
      >
        <ArrowIcon width={20} height={20} />
      </button>
    </section>
  );
};

export default FeaturedContainer;
