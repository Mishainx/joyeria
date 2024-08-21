"use client";

import { useState } from "react";
import AdminProductCard from "./AdminProductCard";
import CreateProductForm from "./createForm";
import { useProducts } from "@/src/context/productContext";
import { useCategories } from "@/src/context/categoriesContext";

const ProductDashboardMobile = () => {
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { products, loading, error } = useProducts();
  const  categories  = useCategories();

  // Filtrar los productos según la búsqueda y categoría seleccionada
  const filteredProducts = products?.payload?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-4 bg-gray-50 w-full">
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex gap-4 mb-4 flex-col lg:flex-row">
            <button
              onClick={() => setView("list")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                view === "list" ? "bg-gray-500 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              Listado de productos
            </button>
            <button
              onClick={() => setView("create")}
              className={`px-4 py-2 rounded-lg font-semibold ${
                view === "create" ? "bg-gray-500 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              Agregar Producto
            </button>
          </div>

          {view === "list" && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Listado de Productos</h2>
              {/* Buscador y filtro de categorías */}
              <div className="flex flex-col mb-4 text-black">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm mb-2"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg shadow-sm text-black"
                >
                  <option value="all">Todas las categorías</option>
                  {categories?.map((category) => (
                    <option key={category.sku} value={category.sku}>
                      {`${category.sku} - ${category.title}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vista de Tarjetas para Productos */}
              <div className="flex flex-wrap p-5 gap-5 items-center justify-center">
                {loading ? (
                  <p className="text-center text-sm text-gray-500">Cargando productos...</p>
                ) : error ? (
                  <p className="text-center text-sm text-red-500">Error al cargar los productos.</p>
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <AdminProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="text-center text-sm text-gray-500">No hay productos disponibles.</p>
                )}
              </div>
            </div>
          )}

          {view === "create" && <CreateProductForm />}
        </div>
      </main>
    </div>
  );
};

export default ProductDashboardMobile;
