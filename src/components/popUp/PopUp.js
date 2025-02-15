"use client";

import { useState, useEffect } from "react";

const PopupNotice = ({ displayAfter = 3, autoCloseAfter = 10 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  // Obtener la imagen más reciente del servidor
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/get-latest-popup-image'); // Ruta para obtener la imagen más reciente
        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.imageUrl); // Asigna la URL de la imagen al estado
        } else {
          console.error('Error fetching image:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  // Mostrar el pop-up después de un tiempo definido (displayAfter)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, displayAfter * 1000);

    return () => clearTimeout(timer);
  }, [displayAfter]);

  // Ocultar automáticamente después de un tiempo definido (autoCloseAfter)
  useEffect(() => {
    if (isVisible && autoCloseAfter > 0) {
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, autoCloseAfter * 1000);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible, autoCloseAfter]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !imageUrl) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg overflow-hidden w-11/12 max-w-md">
        {/* Botón para cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center focus:outline-none"
        >
          &#10005;
        </button>

        {/* Imagen del aviso */}
        <img
          src={imageUrl}
          alt="Aviso de Feria"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default PopupNotice;
