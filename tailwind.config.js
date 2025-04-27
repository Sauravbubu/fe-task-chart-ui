/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B40EE',
        profit:'#67BF6B',
        loss:'#FF4D4F',
      },
    },
  },
  plugins: [],
}

