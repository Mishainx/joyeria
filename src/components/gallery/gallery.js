"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importa el componente Link
import ImagePopup from "./ImagePopup";
import { useCategories } from "@/src/context/categoriesContext";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { updateCatalogueCategory } = useCategories();  // Accede a la función para actualizar la categoría seleccionada
  const images = [
    { name: "Anillos", src: "/img/gallery/imagen-1.jpeg", link:"#catalogue", category: "00001" },
    { name: "Brazaletes", src: "/img/gallery/imagen-2.jpeg", link:"#catalogue", category: "00004" },
    { name: "Aros", src: "/img/gallery/aros-joyeria-veronica-galainena.jpeg", link:"#catalogue", category: "00003" },
    { name: "Collares", src: "/img/gallery/imagen-4.jpeg", link:"#catalogue", category: "00002" },
    { name: "Todos", src: "/img/gallery/imagen-5.jpeg", link:"#catalogue", category: "all" },
    { name: "Anillos", src: "/img/gallery/imagen-6.jpeg", link:"#catalogue", category: "00001" },
  ];

  const handleImageClick = (src, category) => {
    updateCatalogueCategory(category); // Actualiza la categoría seleccionada en el catálogo
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
                onClick={() => handleImageClick(image.src, image.category)} // Actualiza la categoría cuando se haga clic
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
