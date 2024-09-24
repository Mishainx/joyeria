// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import CatalogueListProducts from './CatalogueListProducts';

export default async function CatalogueContainer({categories}) {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }

  const featuredProducts = products.filter((product) => product.featured) || [];

  return (
    <CatalogueListProducts catalogueProducts={products}/>
);
}
