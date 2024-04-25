/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        'lg': '5rem',
        'xl': '6rem',
        '2xl': '8rem',
      },
    },
    colors: {
      'black': '#353535',
      'green': '#3c6e71',
      'white': '#ffffff',
      'gray': '#d9d9d9',
      'blue': '#284b63',
      'light-blue': '#C7DBE6',
      'pink': '#BFB1C1',
      'purple': '#AFA2FF'
    },
    fontFamily: {
      'Outfit': ["Outfit", 'sans-serif']
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX : -1000px' },
          '100%': { opacity: '1', transform: 'translateX : 0px' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease',
      }

    },
  },
  plugins: [],
}

