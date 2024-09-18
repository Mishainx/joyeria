import ArrowIcon from "@/src/icons/ArrowIcon";
import MenuIcon from "@/src/icons/menu-icon";
import Link from 'next/link';

const MenuList = ({ open, handleClose, pages }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in-out`}
      style={{ pointerEvents: open ? 'auto' : 'none' }}
    >
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-sm bg-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-lg transition-transform duration-700 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} flex flex-col items-center p-4 shadow-lg border border-solid border-white border-opacity-20`}
      >
        {/* Contenedor del MenuIcon con borde inferior */}
        <div 
          onClick={handleClose} 
          className="absolute top-4 left-0 right-0 flex items-center p-4 cursor-pointer"
        >
          <MenuIcon width={30} height={30} className="text-yellow-500" />
        </div>

        {/* Enlaces de navegación */}
        <div className="flex-1 text-white flex flex-col items-center justify-start py-5 space-y-4 mt-16 w-full">
          {pages.map((page) => (
            <Link 
              key={page.path} 
              href={page.path} 
              className="w-full flex justify-between items-center border-s-2 border-yellow-500"
              onClick={handleClose}  // Llama a handleClose cuando se hace clic en un enlace
            >
              <div className="p-3 bg-opacity-90 text-start rounded-lg text-white font-semibold text-lg transition-transform transform active:scale-95">
                {page.name}
              </div>
              <ArrowIcon width={20} height={20} className="text-yellow-500"/>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default MenuList;
