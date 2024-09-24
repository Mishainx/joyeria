// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import CatalogueListProducts from './CatalogueListProducts';

export default async function CatalogueContainer() {
const products = await fetchProducts()

  return (
    <CatalogueListProducts catalogueProducts={products}/>
);
}
