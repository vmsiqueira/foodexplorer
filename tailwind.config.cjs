/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000000',
      white: '#FFFFFF',

      blue: {
        900: '#000A0F',
        800: '#001119',
        700: '#00111A',
        600: '#00131C',
        500: '#091E26',
        400: '#192227',
      },

      cyan: {
        500: '#82F3FF',
      },

      gray: {
        700: '#7C7C8A',
        500: '#C4C4CC', 
        100: '#FFFAF1',
      },

      red: {
        800: '#750310',
        500: '#92000E',
        400: '#AB4D55',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        heading: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}
