/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      'main-purple': 'rgb(99, 58, 112)',
    },
  },
  
  plugins: [],
}