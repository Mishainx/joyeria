import { fetchCategories } from '@/src/utils/categoriesManager';
import Gallery from "@/src/components/gallery/gallery";
import Hero from "@/src/components/hero/hero";
import FeaturedProducts from "@/src/components/products/FeaturedProducts";
import ProductList from "@/src/components/products/ProductList";


export default async function Home() {
  const categories = await fetchCategories();

  return (
    <main className="">
      <Hero/>
      <Gallery/>
      <FeaturedProducts/>
      <ProductList categories={categories} />
    </main>
  );
}
