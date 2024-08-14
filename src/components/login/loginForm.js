"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Estado para el mensaje de error

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/login`)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

  
      if (response.ok) {
        router.push("/");
      } else {
        setError("Ocurrió un error. Por favor, intenta nuevamente."); // Mensaje mostrado en caso de error
      }
    } catch (error) {
      setError("Ocurrió un error. Por favor, intenta nuevamente."); // Mensaje mostrado en caso de excepción
    }
  };
  
  
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#241C1C]">
      <form
        onSubmit={handleSubmit}
        className="p-6 sm:px-8 rounded-xl w-full max-w-md mx-2 sm:mx-0 bg-[#3C2A21] shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Inicia sesión o regístrate
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          value={values.email}
          required
          placeholder="Tu email"
          className="p-3 rounded w-full border border-[#5C4033] bg-[#4A3F35] text-[#FFD700] mb-4 focus:outline-none focus:border-[#FFD700]"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          required
          placeholder="Tu contraseña"
          className="p-3 rounded w-full border border-[#5C4033] bg-[#4A3F35] text-[#FFD700] mb-4 focus:outline-none focus:border-[#FFD700]"
          name="password"
          onChange={handleChange}
        />
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-[#A67B5B] text-white py-2 px-4 rounded-md hover:bg-[#B08560] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-50"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
