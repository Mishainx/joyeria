"use client";

import ProductDetail from "@/src/components/products/ProductDetail";

const ProductContainer = ({ product }) => {

  return (
    <main className='bg-slate-100 w-full'>
      {product ? <ProductDetail product={product} /> : <p>Producto no encontrado</p>}
    </main>
  );
};

export default ProductContainer;
