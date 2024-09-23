import ProductContainer from "@/src/components/products/ProductDetailContainer";
import { capitalizeFirstLetter } from "@/src/utils/stringsManager";

// Función para obtener el producto por slug
const fetchProductBySlug = async (slug) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/slug/${slug}`);
  if (!response.ok) {
    throw new Error('Producto no encontrado');
  }
  const data = await response.json();
  return data.product; // Asegúrate de que el campo sea correcto
};

export async function generateMetadata({ params }) {
  const product = await fetchProductBySlug(params.slug); // Obtener el producto por slug

  return {
    title: `${capitalizeFirstLetter(product.name)} - Verónica Galainena Joyería`, // Título
    description: product.description, // Descripción
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.img, // URL de la imagen
        },
      ],
      url: `${process.env.NEXT_PUBLIC_URL}/products/${params.slug}`, // Asegúrate de definir NEXT_PUBLIC_URL en tu .env
    },
  };
}

const ProductSlug = async ({ params }) => {
  const { slug } = params;

  // Cargar el producto directamente aquí
  const product = await fetchProductBySlug(slug);

  return (
    <ProductContainer product={product} /> // Pasa el producto al contenedor
  );
};

export default ProductSlug;