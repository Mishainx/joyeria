// src/components/FeaturedProducts.jsx
import FeaturedContainer from './FeaturedContainer';

export default async function FeaturedProducts() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,{cache:"no-store"}); // Ajusta la URL según sea necesario
  const data = await response.json()
  const products = data.payload;

  const featuredProducts = products.filter((product) => product.featured) || [];

  return (
    <FeaturedContainer featuredProducts={featuredProducts} />
  );
}
