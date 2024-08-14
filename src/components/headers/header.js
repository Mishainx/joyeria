import NavBar from "./nav/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black/70 flex flex-row-reverse justify-between items-center px-10 py-3 lg:px-16 sticky top-0 z-50 w-full lg:flex-row lg:shadow-lg ">
            
            <Link href="/">
                <div className="w-20 h-20">
                    <Image
                        src="/veronica-galainena-joyeria-logo.png"
                        alt="Veronica Galainena Joyería Logo"
                        width={100}
                        height={100}
                        className="relative rounded-full shadow-lg shadow-yellow-500 hover:shadow-yellow-400 transition-all duration-300"
                    />
                </div>
            </Link>
            <NavBar className="ml-auto" />
        </header>
    );
}
