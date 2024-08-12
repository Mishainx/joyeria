import BrowserIcons from "@/src/components/browserIcons/browserIcons";
import Image from "next/image";
import logo from "@/public/veronica-galainena-joyeria-logo.png";

export default function Proximamente() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/proximamente-veronica-galainena.jpg"
          alt="Próximamente"
          fill={true}
          priority
          quality={100}
          className="z-[-1] object-cover"
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900/30 to-gray-800/90 text-white relative">
        {/* Espacio para el logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <Image
              src={logo}
              alt="Veronica Galainena joyeria logo"
              width={200}
              height={200}
              className="object-cover rounded-full shadow-lg shadow-yellow-500"
            />
          </div>
        </div>

        <div className="container px-4 py-16 sm:py-24 lg:py-8 text-center space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn delay-100">
            ¡Próximamente!
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl animate-fadeIn delay-300">
            Estamos trabajando en algo brillante para ti. Mientras tanto descubrí nuestras redes.
          </p>
          <div className="animate-fadeIn delay-400">
            <BrowserIcons />
          </div>
        </div>
      </main>
    </div>
  );
}
