// src/components/FeaturedProducts.jsx
import CatalogueListProducts from './CatalogueListProducts';

export default async function CatalogueContainer() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`); // Ajusta la URL según sea necesario
    const data = await response.json()
    const products = data.payload

  return (
    <CatalogueListProducts catalogueProducts={products}/>
);
}
