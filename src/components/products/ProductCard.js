import { useState } from 'react';
import Image from "next/image";
import EyeIcon from "@/src/icons/EyeIcon";
import ImagePopup from '../gallery/ImagePopup';
import PhoneIcon from '@/src/icons/PhoneIcon';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center text-center w-[250px] flex-shrink-0 bg-white bg-opacity-60 backdrop-blur-md overflow-hidden duration-300 hover:shadow-xl">
        {/* Contenedor de la imagen con fondo gris */}
        <div className="relative w-full aspect-square bg-gray-300 overflow-hidden">
          <Image
            src={product.img}
            fill={true}
            alt={product.name}
            className="object-cover transition-transform duration-300 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            onClick={() => handleImageClick(product.img)}
          />

          {/* Descripción del producto en hover */}
          <div className="hidden absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg lg:flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 space-y-5">
            <p className="text-sm text-white text-center text-wrap">{product.description}</p>
            <div className='flex space-x-4'>
              {/* Icono de Eye con el onClick para abrir el popup */}
              <div  onClick={() => handleImageClick(product.img)}  // Mueve el onClick aquí
              >
                              <EyeIcon
                width="50"
                height="50"
                className="text-darkGold border-2 border-darkGold rounded-full p-2 cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition duration-500"
              />

              </div>
              {/* Botón de WhatsApp */}
              <Link target='blank' href={`https://api.whatsapp.com/send/?phone=5491161256858&text=Hola!+quiero+consultar+por+${product.name}+Cod:+${product.sku}`}>
                <PhoneIcon
                  width="50"
                  height="50"
                  className="text-darkGold border-2 border-darkGold rounded-full p-2 cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition duration-500"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className="w-full p-3 text-center">
          <h3 className="text-base font-semibold text-darkGold mb-1">{product.name}</h3>
          <p className="text-base font-semibold text-gray-900">$ {product.price.toLocaleString('es-ES')}</p>
        </div>

        {/* Modal */}
      </div>
      {/* Show Popup */}
      {selectedImage && (
        <ImagePopup src={selectedImage} onClose={handleClosePopup} />
      )}
    </>
  );
}
