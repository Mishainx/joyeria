import BraceletIcon from "@/src/icons/BraceletIcon";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const pages=[
    {name:"Catálogo",path:"#catalogue",icon: <BraceletIcon width={20} height={20}/>},
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