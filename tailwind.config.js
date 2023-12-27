/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {

        'lateef': ['"Lateef"', 'serif'],
        'love-light': ['"Love Light"', 'cursive'],
      },
      backgroundColor: {
        'book': '#B75642',
      },
      textColor:{
        'book': '#B75642',
      }
    },
  },
  plugins: [],
}

