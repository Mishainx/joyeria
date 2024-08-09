"use client"

import { useState } from "react";
import MenuIcon from "@/src/icons/menu-icon"
import MenuList from "./menuList"

export default function MobileNav({pages}){
    const [open, setOpen] = useState(false);

    const handleMenu = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="flex lg:hidden">
            <div onClick={handleMenu}>
                <MenuIcon width={30} height={30} className="text-white cursor-pointer"/>
            </div>
            <MenuList open={open} handleClose={handleClose} pages={pages}/>
        </div>
    )
}