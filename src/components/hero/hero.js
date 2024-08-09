import NavBar from "../headers/nav/navbar";

export default function Hero() {
    return (
      <section className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="/path/to/your/image.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Discover amazing content and find what you're looking for.
          </p>
          <a
            href="#"
            className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  }
  