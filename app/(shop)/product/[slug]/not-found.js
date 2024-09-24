import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 text-center space-y-4 ">
            <Link href="/" className='mb-2'>
                <div className="w-32 h-32">
                    <Image
                        src="/veronica-galainena-joyeria-logo.png"
                        alt="Veronica Galainena Joyería Logo"
                        width={200}
                        height={200}
                        className="relative rounded-full shadow-lg shadow-yellow-500 hover:shadow-yellow-400 transition-all duration-300"
                    />
                </div>
            </Link>
      <h1 className="text-2xl font-semibold">404</h1>
      <h2 className="text-2xl font-semibold mb-2">¡Ups! Página no encontrada</h2>
      <p className="mb-6 text-lg">La página que estás buscando no existe o ha sido movida.</p>
      <div
  className="border border-yellow-500 shadow-[0_0_20px_6px_rgba(255,215,0,0.8)] lg:shadow-none lg:hover:shadow-[0_0_20px_6px_rgba(255,215,0,0.8)] transition-all duration-300 ease-in  rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
  style={{ opacity: 0, animation: 'fadeIn 3s ease-out forwards', animationDelay: '1700ms' }}
>
  <Link
    href="/"
    className="p-4 text-lg font-semibold text-gray-800 transition-colors duration-500 ease-in lg:hover:text-gray-600"
  >
    Volver
  </Link>
</div>
    </div>
  );
}
