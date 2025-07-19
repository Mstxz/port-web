/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-purple': {
          50: '#F2ECFC',   // Very light lavender
          100: '#E4D9F9',
          200: '#C9B5F1',
          300: '#AE90E8',
          400: '#9773DD',  // Slightly lighter than base
          500: '#8465C4',  // Base color
          600: '#6D53A3',
          700: '#574182',
          800: '#433261',
          900: '#2F2242',  // Matches 'dark'
          950: '#211631',  // Very dark
        },
      },
      keyframes : {
        headeranim : {
          '0%' : { transform: 'rotateX(60deg) translateY(20px)' },
          '100%' : { transform: 'rotateX(0deg)' },
        }
      },
      animation : {
        headeranimation : 'headeranim 0.5s ease',
      }
    },
      fontFamily: {
        'main': ['Poiret One', 'sans-serif'],
        'header' : ['"Eras ITC"', 'sans-serif'],
      }
  },

  plugins: [],
}