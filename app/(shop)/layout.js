import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/src/components/headers/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vero Galainena",
  description: "Joyería de alto diseño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
      </body>
    </html>
  );
}
