import Image from 'next/image';
import { capitalizeAllWords, capitalizeFirstLetter } from "@/src/utils/stringsManager";
import WhatsappIcon from '@/src/icons/WhatsappIcon';
import Link from 'next/link';

export const ProductDetail = ({ product }) => {
  console.log(product)

  return (
    <div className="container mx-auto p-6">
      {/* Contenedor principal responsivo */}
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
        
        {/* Imagen del producto */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-1">
          <Image
            src={product.img}
            alt={product.title}
            className="w-full md:w-4/5 h-auto object-cover rounded-lg shadow-xl"
            width={500} // Ajusta el ancho según sea necesario
            height={500} // Ajusta la altura según sea necesario
          />
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start order-2 md:order-2">
          <h1 className="text-3xl font-bold text-gold mb-4">{capitalizeAllWords(product.name)}</h1>
          <p className="text-2xl font-semibold text-lightGray mb-4 whitespace-nowrap">$ {new Intl.NumberFormat('es-AR').format(product.price)}</p>
          <p className="text-lightGray text-justify leading-relaxed">{capitalizeFirstLetter(product.description)}</p>

          {/* Div para centrar el botón solo en móviles */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start w-full mt-6 space-y-2 md:space-y-0 md:space-x-4">
            <Link href={`https://wa.me/5491161256858?text=Hola! quiero consultar por este producto: ${encodeURIComponent(product.name)}%0A%0A${process.env.NEXT_PUBLIC_API_URL}/product/${product.slug}`}>
              <button className="flex  justify-center gap-2 bg-gold text-white w-full px-3 py-1.5 rounded-md border border-transparent hover:bg-darkGold transition-all duration-200 shadow-sm hover:shadow-md">
                Consultar <WhatsappIcon />
              </button>
            </Link>
            <Link href="/#catalogue">
              <button className="flex justify-center gap-2 bg-gray-200 text-gray-800 w-full px-3 py-1.5 rounded-md border border-transparent hover:bg-gray-300 transition-all duration-200 shadow-sm hover:shadow-md">
                Volver al catálogo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
