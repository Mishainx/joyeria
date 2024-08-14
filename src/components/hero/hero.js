import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white h-screen">
      <div className="absolute inset-0">
        <Image
          src="/proximamente-veronica-galainena.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          fill
          priority // Esta propiedad puede ayudar a cargar la imagen más rápido
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        >
        Verónica Galainena Joyería
        </h1>
        <p
  style={{ opacity: 0, animation: 'fadeIn 3s ease-out forwards', animationDelay: '1000ms' }}
  className="text-lg md:text-xl lg:text-2xl mb-6"
>
  Piezas únicas creadas con pasión.
</p>


<div
  className="border border-yellow-500 shadow-[0_0_20px_6px_rgba(255,215,0,0.8)] lg:shadow-none lg:hover:shadow-[0_0_20px_6px_rgba(255,215,0,0.8)] transition-all duration-300 ease-in  rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
  style={{ opacity: 0, animation: 'fadeIn 3s ease-out forwards', animationDelay: '1700ms' }}
>
  <Link
    href="#"
    className="p-4 text-lg font-semibold text-gray-800 transition-colors duration-500 ease-in lg:hover:text-gray-600"
  >
    Catálogo
  </Link>
</div>






      </div>
    </section>
  );
}
