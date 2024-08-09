import NavBar from "./nav/navbar"

export default function Header(){
    return (
        <header className="bg-slate-800 flex flex-row-reverse justify-between items-center px-10 py-3 lg:flex-row sticky top-0 z-50">
            <p className="text-white gradient-text text-4xl font-bold">
                Vero Galeinena
            </p>
            <NavBar/>
        </header>
    )
}