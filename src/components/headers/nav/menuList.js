import MenuIcon from "@/src/icons/menu-icon";
import { useEffect, useState } from "react";

const MenuList = ({ open, handleClose }) => {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      document.body.style.overflow = "hidden"; // Evita el scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = "auto"; // Permite el scroll cuando el menú está cerrado
      setTimeout(() => setShouldRender(false), 1000); // Espera a que la animación termine
    }
  }, [open]);

  return (
    shouldRender && (
      <div className={`fixed inset-0 z-40 ${open ? 'visible opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
        <aside
          className={`fixed top-0 left-0 h-full w-full bg-slate-900 bg-opacity-10 backdrop-filter backdrop-blur-lg transition-transform duration-1000 ease-in-out ${open ? 'clip-circle-open' : 'clip-circle-close'} flex flex-col items-center p-2 shadow-lg border border-solid border-white border-opacity-20`}>
          <div onClick={handleClose} className="self-end p-4">
            <MenuIcon width={30} height={30} className="text-white cursor-pointer" />
          </div>
          <div>
            Contenido del menú
          </div>
        </aside>
      </div>
    )
  );
};

export default MenuList;
