import BrowserIcons from "../browserIcons/browserIcons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <section className="bg-neutral-800 flex flex-col justify-center items-center space-y-6 p-10">
            <Link href="/">
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
            <div>
                <BrowserIcons />
            </div>
            {/* Línea con gradiente dorado */}
            <div className="w-full h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 my-4"></div>
            {/* Texto de copyright */}
            <div className="text-center text-white text-sm">
                &copy; {new Date().getFullYear()} Verónica Galainena Joyería. Todos los derechos reservados.
            </div>
        </section>
    );
};

export default Footer;
