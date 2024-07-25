/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont: "Montserrat , sans-serif",
        rob:  "Roboto Slab , serif"
      },
      colors:{
        choice1: '#021526',
        choice2: '#03346E',
        choice3: '#6EACDA',
        choice4: '#E2E2B6',

      }
    },
  },
  plugins: [],
}