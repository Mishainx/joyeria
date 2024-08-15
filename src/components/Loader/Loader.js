import Image from 'next/image';

export default function Loader() {
  return (
    <div className='w-full h-52'>
            <div className="w-32 h-32 flex items-center justify-center bg-black">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <Image
          src="/veronica-galainena-joyeria-logo.png"
          alt="Veronica Galainena Joyería Logo"
          width={200}
          height={200}
          className="relative rounded-full shadow-loading animate-pulseShadow transition-all duration-300"
        />
      </div>
    </div>

    </div>

  );
}
