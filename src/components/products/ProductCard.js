import { useState } from 'react';
import Image from "next/image";
import ImagePopup from '../gallery/ImagePopup';
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
  <button className="text-xs text-white bg-darkGold border-2 border-darkGold rounded-lg py-1 px-2 
                    transition-all duration-300 ease-in-out 
                    shadow-md 
                    focus:outline-none focus:ring-2 focus:ring-darkGold focus:ring-opacity-50 
                    hover:bg-darkGold hover:text-white hover:border-darkGold 
                    lg:bg-transparent lg:text-slate-800 lg:border-2 lg:border-slate-200
                    lg:shadow-none lg:hover:bg-darkGold lg:hover:text-white lg:hover:border-darkGold lg:hover:shadow-md">
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
