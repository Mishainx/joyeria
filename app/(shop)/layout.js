// app/layout.js
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/src/components/headers/header";
import Footer from "@/src/components/footer/footer";
import { ProductProvider } from "@/src/context/productContext";
import { CategoryProvider } from "@/src/context/categoriesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vero Galainena",
  description: "Joyería de alto diseño",
};

// Modificar RootLayout para usar funciones asíncronas
export default async function RootLayout({ children }) {
  // Obtener las categorías

  return (
    <html lang="en">
      <body className={inter.className}>
      <CategoryProvider>
        <ProductProvider>
          <Header  />
            {children}
          <Footer />
        </ProductProvider>
      </CategoryProvider>

      </body>
    </html>
  );
}
