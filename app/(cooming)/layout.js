import "../globals.css";

export const metadata = {
  title: 'Verónica Galainena Joyeria',
  description: 'Joyeria de autor',
  keywords: 'joyeria, joyas, verónica galainena',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
