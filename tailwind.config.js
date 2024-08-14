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
        gold: '#FFD700', // Ajusta el valor del color dorado aquí
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
        fadeInDelayShort: 'fadeIn 3s ease-out forwards', // Usa forwards para mantener el estado final
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
