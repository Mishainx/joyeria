import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const pages=[
    {name:"Catalogo",path:"/catalogo"},
    {name:"Mi taller",path:"/taller"},
]

export default function NavBar(){
    return (
        <nav className="">
            <DesktopNav pages={pages}/>
            <MobileNav pages={pages}/>
        </nav>
    )
}