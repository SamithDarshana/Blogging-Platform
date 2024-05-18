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
        'custom-400': '#6C63FF', 
        'custom-450': '#49558b',
        'custom-500': '#acb6e5',
        'custom-600': '#86fde8',
        'custom-700': '#153b50',
        'custom-750': '#07beb8'
      }
    },
  },
  plugins: [],
}

