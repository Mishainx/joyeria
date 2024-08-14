import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImagePopup = ({ src, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // Espera a que la transición se complete antes de cerrar
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`relative max-w-screen-sm max-h-[90vh] w-full h-full flex items-center justify-center transition-transform duration-500 ${show ? 'scale-100' : 'scale-90'} md:max-w-3xl md:max-h-3xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-5 text-white bg-gray-900 p-0 rounded-full shadow-md z-10"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className="relative w-10/12 sm:w-full h-full p-4 md:p-0">
          <Image
            src={src}
            alt="Enlarged view"
            layout="fill"
            objectFit="contain"
            className="shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;


