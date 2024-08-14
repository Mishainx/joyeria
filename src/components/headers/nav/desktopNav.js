import Link from "next/link";

export default function DesktopNav({ pages }) {
  return (
    <ul className="hidden text-white lg:flex space-x-4">
      {pages.map((page, index) => (
        <li key={index} className="relative group">
          <Link href={page.path} className="relative block py-2 px-3">
            {/* Texto */}
            <span className="relative z-20 text-white group-hover:text-yellow-100 transition-colors duration-300 ease-in-out text-shadow-md ">
              {page.name}
            </span>
            {/* Pseudo-elemento para el borde expansivo */}
            <span className="absolute inset-0 border-transparent border-2 transition-all duration-700 ease-in-out group-hover:border-yellow-500"></span>
            {/* Pseudo-elemento para el fondo expansivo */}
            <span className="absolute inset-0 before:absolute before:inset-0 before:bg-yellow-400 before:w-0 before:h-full before:transition-all before:duration-1000 before:ease-in-out before:group-hover:w-full before:group-hover:opacity-50"></span>
            {/* Borde izquierdo inicial más delgado */}
            <span className="absolute left-0 top-0 bottom-0 w-[1px] bg-yellow-500 "></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
