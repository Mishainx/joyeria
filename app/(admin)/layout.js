import "../globals.css";
import { CategoryProvider } from "@/src/context/categoriesContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from "@/src/context/productContext";

export const metadata = {
  title: "Vero Galainena",
  description: "Joyería de alto diseño",
};

export default function RootLayout({ children }) {
  console.log(CategoryProvider)

  return (
    <html lang="en">
      <body>
        <CategoryProvider>
          <ProductProvider>
            <ToastContainer/> 
            {children}
          </ProductProvider>
        </CategoryProvider>
      </body>
    </html>
  )
}
