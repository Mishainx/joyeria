// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import FeaturedContainer from './FeaturedContainer';

export default async function FeaturedProducts({products}) {

  const featuredProducts = products.filter((product) => product.featured) || [];

  return (
    <FeaturedContainer featuredProducts={featuredProducts} />
  );
}
