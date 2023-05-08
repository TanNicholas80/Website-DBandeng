/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'salsa': ["'Salsa'"]
      },
      translate: {
        '-1/2': '-50%',
      },
      animation: {
        'fade': 'fade 1.5s ease-out'
      },
      keyframes: {
        fade: {
          'from': { opacity: '0.3'},
          'to': { opacity: '1'},
        },
      },
      screens: {
        'xs': {'max': '640px'},
      },
    },
  },
  plugins: [],
}

