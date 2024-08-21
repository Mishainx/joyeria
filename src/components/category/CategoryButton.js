import Image from "next/image";

export default function CategoryButton({ category, onSelect }) {
  return (
    <button
      className="flex flex-col items-center flex-shrink-0 w-24 h-28 sm:w-28 sm:h-32 p-2 rounded-full transition-transform transform hover:scale-110 duration-300"
      onClick={() => onSelect(category.name)}
    >
      <div
        className="w-18 h-18 sm:w-22 sm:h-22 rounded-full flex items-center justify-center bg-gradient-conic border-2 border-gray-200 p-2"
      >
        <div className="bg-white rounded-full flex items-center justify-center w-full h-full">
          <Image
            src={category.img}
            width={60}
            height={60}
            alt={category.title}
            className="rounded-full"
          />
        </div>
      </div>
      <span className="text-xs font-light text-gray-600 mt-2 whitespace-nowrap">
        {category.title}
      </span>
    </button>
  );
}
