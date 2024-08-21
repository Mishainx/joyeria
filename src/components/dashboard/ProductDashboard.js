import ProductDashboardMobile from "./ProductDashboardMobile";
import ProductDashboardLg from "./ProductDashboardLg";

const ProductDashboard = () => {
  return (
    <>
      {/* Componente para pantallas grandes */}
      <div className="hidden lg:block">
        <ProductDashboardLg />
      </div>
      {/* Componente para móviles */}
      <div className="block lg:hidden">
        <ProductDashboardMobile />
      </div>
    </>
  );
};

export default ProductDashboard;
