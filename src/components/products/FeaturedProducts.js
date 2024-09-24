// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import FeaturedContainer from './FeaturedContainer';

export default async function FeaturedProducts() {

  const response = await fetch(`https://www.veronicagalainena.com.ar/api/products`); // Ajusta la URL según sea necesario
  const data = await response.json()
  const products = data.payload;
  console.log(products)// Ajusta según sea necesario

  const featuredProducts = products.filter((product) => product.featured) || [];

  return (
    <FeaturedContainer featuredProducts={featuredProducts} />
  );
}
