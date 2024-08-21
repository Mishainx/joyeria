import Image from "next/image";

const AdminProductCard = ({ product, onEdit }) => {
  return (
    <div className="w-full p-2  max-w-[200px] bg-white shadow-lg rounded-lg flex flex-col sm:p-3 gap-2 overflow-hidden">
      {/* Imagen del producto */}
      <div className="flex justify-evenly items-center">
        <Image
          src={product.img}
          alt={product.name}
          width={100}
          height={100}
          className="object-cover"
          style={{ aspectRatio: "1 / 1" }}
        />
      </div>

      {/* Contenido del producto */}
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-sm font-semibold text-gray-700">ID: {product.sku}</p>
        <p className="text-sm font-semibold text-gray-900">{product.name}</p>
        <p className="text-xs text-gray-800">Precio: ${product.price}</p>
        <p className="text-xs text-gray-600">Categoría: {product.category}</p>

        {/* Indicadores de estado */}
        <div className="flex flex-col gap-1 mt-2">
          <span className={`text-xs flex items-center ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock ? "Disponible" : "No Disponible"}
          </span>
          <span className={`text-xs flex items-center ${product.featured ? 'text-yellow-500' : 'text-gray-400'}`}>
            {product.featured ? "Destacado" : "No Destacado"}
          </span>
          <span className={`text-xs flex items-center ${product.visible ? 'text-green-600' : 'text-gray-400'}`}>
            {product.visible ? "Visible" : "No Visible"}
          </span>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 mt-2">
        <button onClick={onEdit} className="text-xs py-1 px-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors flex-1">
          Editar
        </button>
        <button className="text-xs py-1 px-2 border border-red-300 rounded-md text-red-600 hover:bg-red-100 transition-colors flex-1">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;

