"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importa el componente Link
import ImagePopup from "./ImagePopup";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { name: "Anillo Nose1", src: "/img/gallery/imagen-1.jpeg", link:"/product/anillo-nose1" },
    { name: "Brazalete Simple", src: "/img/gallery/imagen-2.jpeg", link:"/product/brazalete-simple" },
    { name: "Brazalete Amorfa", src: "/img/gallery/imagen-3.jpeg", link:"/product/brazalete-amorfa"},
    { name: "Collar Simple", src: "/img/gallery/imagen-4.jpeg", link: "/product/collar-simple" },
    { name: "brazalete-sintonía", src: "/img/gallery/imagen-5.jpeg", link:"/product/brazalete-sintonia" },
    { name: "Anillo Luz", src: "/img/gallery/imagen-6.jpeg", link:"/product/anillo-luz1" },
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative bg-white">
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {images.map((image, index) => {
            const imageContent = (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square group cursor-pointer"
                onClick={() => !image.link && handleImageClick(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  fill={true}
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                  <span className="text-white text-lg font-bold relative">
                    {image.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold transition-all duration-1000 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </div>
              </div>
            );

            return image.link ? (
              <Link href={image.link} key={index}>
                {imageContent}
              </Link>
            ) : (
              imageContent
            );
          })}
        </div>
      </div>

      {/* Show Popup */}
      {selectedImage && <ImagePopup src={selectedImage} onClose={handleClosePopup} />}
    </div>
  );
};

export default Gallery;
