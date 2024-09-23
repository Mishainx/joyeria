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
        <div className="relative w-full aspect-square bg-gray-300 overflow-hidden cursor-pointer">
          <Image
            src={product.img}
            fill={true}
            alt={product.name}
            className="object-cover transition-transform duration-300 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            onClick={() => handleImageClick(product.img)}
          />

        </div>

{/* Información del producto */}
<div className="w-full p-3 text-center">
  <h3 className="text-base font-semibold text-darkGold mb-1">{product.name}</h3>
  <Link href={`/product/${product.slug}`}>
    <button className="text-xs text-slate-700 border-2 rounded-lg py-1 px-2 border-slate-300 
                      transition-all duration-300 ease-in-out hover:bg-darkGold 
                      hover:text-white hover:border-darkGold hover:shadow-md 
                      focus:outline-none focus:ring-2 focus:ring-darkGold focus:ring-opacity-50">
      Ver detalle
    </button>
  </Link>
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
