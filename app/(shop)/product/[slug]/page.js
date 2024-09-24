import ProductContainer from "@/src/components/products/ProductDetailContainer";
import { capitalizeFirstLetter } from "@/src/utils/stringsManager";
import { fetchProductBySlug } from "@/src/utils/productManager";
import { notFound } from "next/navigation"; // Para redirigir a una página 404 en caso de error

export async function generateMetadata({ params }) {
  try {
    const product = await fetchProductBySlug(params.slug);

    if (!product) {
      throw new Error('Product not found'); // Asegurarte de que no sea null
    }

    return {
      title: `${capitalizeFirstLetter(product.name)} - Verónica Galainena Joyería`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [
          {
            url: product.img,
          },
        ],
        url: `${process.env.NEXT_PUBLIC_URL}/products/${params.slug}`,
      },
    };
  } catch (error) {
    // En caso de error o si el producto no existe
    return {
      title: "Producto no encontrado - Verónica Galainena Joyería",
      description: "El producto solicitado no fue encontrado.",
    };
  }
}

const ProductSlug = async ({ params }) => {
  const { slug } = params;

  try {
    const product = await fetchProductBySlug(slug);

    if (!product) {
      throw new Error('Product not found');
    }

    return <ProductContainer product={product} />;
  } catch (error) {
    // Redirigir a una página 404 si el producto no se encuentra
    notFound(); // Utiliza el método notFound de Next.js
    return null; // Retorna null para evitar problemas adicionales
  }
};

export default ProductSlug;
