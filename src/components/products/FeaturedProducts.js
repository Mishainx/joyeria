"use client";

import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '@/src/context/productContext';

function FeaturedProducts() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const { products, loading, error } = useProducts();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => setIsInteracting(false);
    const handleTouchStart = () => setIsInteracting(true);
    const handleTouchEnd = () => setIsInteracting(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  if (loading) return <p>Cargando productos destacados...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  // Duplica los productos para permitir el desplazamiento continuo
  const featuredProducts = products?.payload?.filter((product) => product.featured) || [];
  const duplicatedProducts = [...featuredProducts, ...featuredProducts];

  return (
    <section className="w-full mx-auto bg-slate-50 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Destacados</h2>
        <div className="inline-block w-24 h-1 bg-yellow-400 mt-2"></div>
      </div>
      <div
        ref={containerRef}
        className={`scroll-container ${isInteracting ? 'pause-animation' : ''}`}
      >
        <div className="scroll-content">
          {duplicatedProducts.length > 0 ? (
            duplicatedProducts.map((product) => (
              <div key={product.id} className="inline-block min-w-[250px] ">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>No hay productos destacados disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

