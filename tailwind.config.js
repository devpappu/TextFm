const colors = require('tailwindcss/colors')

module.exports = {

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        free: {
          100: '#365200',
          200: '#558000',
        },
        reserved: {
          100: '#4a0000',
          200: '#6C0000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        josefink: "'Josefin Sans', sans-s",
        roboto: "'Roboto', sans-serif",
      }
    }
  }

}