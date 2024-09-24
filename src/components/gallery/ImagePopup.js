import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import { createPortal } from 'react-dom'; 
import Spinner from '../Loader/Spinner';

const ImagePopup = ({ src, onClose }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga de la imagen

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200); // Espera a que la transición se complete antes de cerrar
  };

  return createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose} // Cierra el popup al hacer clic en el fondo
    >
      <div
        className={`relative max-w-screen-sm max-h-[90vh] w-full h-full flex items-center justify-center transition-transform duration-300 ${show ? 'scale-100' : 'scale-100'} md:max-w-3xl md:max-h-3xl`}
      >
        <button
          className="absolute top-5 right-5 text-white bg-gray-900 p-0 rounded-full shadow-md z-10"
          onClick={handleClose} // Cierra el popup al hacer clic en el botón
        >
          &times;
        </button>

        <div className="relative w-10/12 sm:w-full h-full p-4 md:p-0">
          {/* Muestra tu propio Loader mientras la imagen está cargando */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner/> {/* Usa tu componente Loader aquí */}
            </div>
          )}

          <Image
            src={src}
            alt="Enlarged view"
            fill={true}
            className={`shadow-lg rounded-lg object-contain transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`} // Transición para mostrar la imagen cuando esté lista
            onLoadingComplete={() => setLoading(false)} // Cambia el estado cuando la imagen se carga
          />
        </div>
      </div>
    </div>,
    document.body // Renderiza el popup en el body del documento
  );
};

export default ImagePopup;

