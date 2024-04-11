/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainOrange" : "#F98C0B",
        "mainBlack" : "#030303"
      }
    },
  },
  plugins: [],
}

