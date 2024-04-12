/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-100': '#074173',
        'custom-200': '#1679AB',
        'custom-300': '#5DEBD7',
        'custom-400': '#C5FF95'
      }
    },
  },
  plugins: [],
}

