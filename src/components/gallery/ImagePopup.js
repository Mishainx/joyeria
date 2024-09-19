import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImagePopup = ({ src, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 200); // Espera a que la transición se complete antes de cerrar
  };

  return ReactDOM.createPortal(
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
          <Image
            src={src}
            alt="Enlarged view"
            fill={true}
            className="shadow-lg rounded-lg object-contain"
          />
        </div>
      </div>
    </div>,
    document.body // Renderiza el popup en el body del documento
  );
};

export default ImagePopup;
