import InstagramIcon from '@/src/icons/InstagramIcon';
import FacebookIcon from '@/src/icons/FacebookIcon';
import Link from 'next/link';
import PhoneIcon from '@/src/icons/PhoneIcon';

export default function BrowserIcons() {
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Contenedor de Instagram */}
      <Link href="https://www.instagram.com/veronicagalainena/" target="_blank">
      <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
        {/* Fondo de contorno con box-shadow */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-[0_0_12px_2px_rgba(255,255,0,0.75)] transition-all duration-300 ease-in-out transform scale-100 lg:border-gray-500 lg:shadow-none lg:bg-transparent group-hover:border-yellow-500 lg:group-hover:border-yellow-500 lg:group-hover:shadow-[0_0_12px_3px_rgba(255,255,0,0.75)] lg:group-hover:scale-105"></div>
        <InstagramIcon
          width={35}
          height={35}
          className="text-yellow-500 transition-all duration-300 ease-in-out lg:text-gray-500 lg:group-hover:text-yellow-500"
        />
      </div>
      </Link>

      <Link href="https://www.facebook.com/veronica.galainena/?locale=es_LA" target="_blank">
      <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
        {/* Fondo de contorno con box-shadow */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-[0_0_12px_2px_rgba(255,255,0,0.75)] transition-all duration-300 ease-in-out transform scale-100 lg:border-gray-500 lg:shadow-none lg:bg-transparent group-hover:border-yellow-500 lg:group-hover:border-yellow-500 lg:group-hover:shadow-[0_0_12px_3px_rgba(255,255,0,0.75)] lg:group-hover:scale-105"></div>
        <FacebookIcon
          width={35}
          height={35}
          className="text-yellow-500 transition-all duration-300 ease-in-out lg:text-gray-500 lg:group-hover:text-yellow-500"
        />
      </div>
      </Link>

      <Link href="https://www.facebook.com/veronica.galainena/?locale=es_LA" target="_blank">
      <div className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
        {/* Fondo de contorno con box-shadow */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-[0_0_12px_2px_rgba(255,255,0,0.75)] transition-all duration-300 ease-in-out transform scale-100 lg:border-gray-500 lg:shadow-none lg:bg-transparent group-hover:border-yellow-500 lg:group-hover:border-yellow-500 lg:group-hover:shadow-[0_0_12px_3px_rgba(255,255,0,0.75)] lg:group-hover:scale-105"></div>
        <PhoneIcon
          width={33}
          height={33}
          className="text-yellow-500 transition-all duration-300 ease-in-out lg:text-gray-500 lg:group-hover:text-yellow-500"
        />
      </div>
      </Link>
    </div>
  );
}



