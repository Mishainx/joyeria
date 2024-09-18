import Image from "next/image";
import { capitalizeFirstLetter } from "@/src/utils/stringsManager";

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
            width={80}
            height={80}
            alt={category.title}
            className="rounded-full"
          />
        </div>
      </div>
      <span className="text-base font-semibold text-gray-600 mt-2 whitespace-nowrap">
        {capitalizeFirstLetter(category.title)}
      </span>
    </button>
  );
}
