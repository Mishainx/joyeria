// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import CatalogueListProducts from './CatalogueListProducts';

export default async function CatalogueContainer() {
    const products = await fetchProducts();
    {/*const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {cache:"no-store"}); // Ajusta la URL según sea necesario
    const data = await response.json()
    const products = data.payload;*/}

  return (
    <CatalogueListProducts catalogueProducts={products}/>
);
}
