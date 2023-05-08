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
    },
  },
  plugins: [],
}

