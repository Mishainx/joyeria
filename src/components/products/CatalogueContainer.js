// src/components/FeaturedProducts.jsx
import { fetchProducts } from '@/src/utils/productManager';
import CatalogueListProducts from './CatalogueListProducts';

export default async function CatalogueContainer() {

  return (
    <CatalogueListProducts catalogueProducts={products}/>
);
}
