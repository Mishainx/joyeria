// tailwind.config.js
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37', // Dorado clásico
        darkGold: '#b8860b', // Dorado oscuro
        bronze: '#cd7f32', // Bronce
        brown: '#8b4513', // Marrón
        lightBrown: '#a0522d', // Marrón claro
        deepBrown: '#3e2723', // Marrón profundo // Ajusta el valor del color dorado aquí
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseShadow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 204, 0, 0.5)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 204, 0, 0.7)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 204, 0, 0.5)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
        fadeInDelayShort: 'fadeIn 3s ease-out forwards', // Usa forwards para mantener el estado final
        pulseShadow: 'pulseShadow 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'loading': '0 0 30px rgba(255, 204, 0, 0.7)', // Ajusta el tamaño y la intensidad de la sombra aquí
      },
      // Define the delay utilities
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
        '900': '900ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1500': '1500ms',
        '1700': '1700ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const delays = theme('animationDelay');
      const delayUtilities = Object.keys(delays).map(key => {
        return {
          [`.delay-${key}`]: {
            'animation-delay': delays[key],
          },
        };
      });
      addUtilities(delayUtilities, ['responsive', 'hover']);
    },
  ],
};
