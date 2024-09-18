import Image from "next/image";

// Este componente se usará como un componente de cliente
export default function ProductCard({ product }) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center w-[250px] flex-shrink-0 bg-white bg-opacity-60 backdrop-blur-md overflow-hidden duration-300 hover:shadow-xl">
      {/* Contenedor de la imagen con fondo gris */}
      <div className="relative w-full aspect-square bg-gray-300 overflow-hidden">
        <Image
          src={product.img}
          fill={true}
          alt={product.name}
          className="object-cover transition-transform duration-300 ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        {/* Descripción del producto en hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 ">
          <p className="text-sm text-white text-center text-wrap">{product.description}</p>
        </div>
      </div>

      {/* Información del producto */}
      <div className="w-full p-3 text-center">
        <h3 className="text-base font-semibold text-darkGold mb-1">{product.name}</h3>
        <p className="text-base font-semibold text-gray-900">$ {product.price.toLocaleString('es-ES')}</p>
      </div>
    </div>
  );
}
