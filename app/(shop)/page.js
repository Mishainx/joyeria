import Gallery from "@/src/components/gallery/gallery";
import Hero from "@/src/components/hero/hero";
import FeaturedProducts from "@/src/components/products/FeaturedProducts";
import CatalogueContainer from '@/src/components/products/CatalogueContainer';
import { fetchProducts } from "@/src/utils/productManager";

export default async function Home() {

  return (
    <main className="">
      <Hero/>
      <Gallery/>
      <FeaturedProducts/>
      <CatalogueContainer/>
    </main>
  );
}
