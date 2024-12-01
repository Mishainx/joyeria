import Image from 'next/image';


export const metadata = {
  title: 'Mi taller',
  description: 'Un breve recorrido por el proceso de creación de las piezas de joyería',
}

export default function WorkshopSection() {

  return (
    <section className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-gray-800">
  {/* Imagen cuadrada para mobile */}
  <div className="relative w-full h-1/2 sm:h-[60%]">
    <Image
      src="/img/taller/veronica-galainena-joyeria-foto-taller.jpeg"
      alt="Verónica Galainena foto taller de joyería"
      layout="fill"
      objectFit="cover"
      className="opacity-80"
    />
    {/* Sombra negra en el límite inferior */}
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
  </div>

  {/* Contenido del texto */}
  <div className="relative flex flex-col justify-center items-center text-center px-6 py-8 bg-gray-900 sm:bg-transparent sm:py-12">
    <h1 className="text-3xl sm:text-5xl font-bold text-gold mb-4">El taller</h1>
    <h2 className="text-lg sm:text-2xl font-medium text-white">
      Piezas con alma creadas en el corazón de nuestro taller artesanal.
    </h2>
  </div>
</div>



      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8 lg:px-16">
        {/* Process Cards */}
        <div className="space-y-16 w-full">
          {/* Card 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center">
              <div className="text-lg text-gray-300 leading-relaxed">
                <div className="relative mb-2 inline-block">
                  <h3 className="text-2xl font-semibold text-gold-500">Inspirado en lo natural</h3>
                  <span className="block h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 absolute left-0 bottom-[-8px] w-full"></span>
                </div>
                <p>
                  Nos inspiramos en las formas, texturas y colores que encontramos en la naturaleza. Desde las suaves curvas de una hoja hasta el brillo de una gota de rocío, cada elemento nos motiva a crear. Observamos cómo la luz interactúa con las piedras y los metales, y nos esforzamos por reflejar esa esencia en nuestros diseños.
                </p>
              </div>
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/img/taller/natural.jpeg"
                alt="Selecting Raw Materials"
                fill={true}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative w-full h-64 order-2 md:order-1">
              <Image
                src="/img/taller/gris.jpeg"
                alt="Design and Sketching"
                fill={true}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex items-center order-1 md:order-2">
              <div className="text-lg text-gray-300 leading-relaxed">
                <div className="relative mb-2 inline-block">
                  <h3 className="text-2xl font-semibold text-gold-500">Una historia en cada pieza</h3>
                  <span className="block h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 absolute left-0 bottom-[-8px] w-full"></span>
                </div>
                <p>
                  Al elegir una de nuestras piezas, no solo llevas un accesorio, sino un fragmento de la vida y la pasión de quienes la elaboraron. Cada detalle, cada forma y cada brillo cuentan una historia que conecta a quien la lleva con la profundidad de su creación, convirtiendo la joyería en un testimonio tangible de momentos y significados que trascienden el tiempo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center">
              <div className="text-lg text-gray-300 leading-relaxed">
                <div className="relative mb-2 inline-block">
                  <h3 className="text-2xl font-semibold text-gold-500">El proceso</h3>
                  <span className="block h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 absolute left-0 bottom-[-8px] w-full"></span>
                </div>
                <p>
                  La creación de nuestras joyas es un viaje que exige dedicación y precisión en cada etapa. Comenzamos seleccionando meticulosamente los mejores materiales, desde metales de alta calidad hasta piedras preciosas, asegurándonos de que cada elemento cumpla con nuestros estándares de excelencia para que cada pieza sea única.
                </p>
              </div>
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/img/taller/unica.jpeg"
                alt="Handcrafting Jewelry"
                fill={true}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
