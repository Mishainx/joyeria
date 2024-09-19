import "../globals.css";

export const metadata = {
  title: 'Página no encontrada',
  description: 'No se ha encontrado la página',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
