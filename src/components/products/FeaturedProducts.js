// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import FeaturedContainer from './FeaturedContainer';

export default async function FeaturedProducts() {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }

  const featuredProducts = products.filter((product) => product.featured) || [];

  return (
    <FeaturedContainer featuredProducts={featuredProducts} />
  );
}
