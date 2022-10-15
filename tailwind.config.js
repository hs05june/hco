/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dark_heading:"#1515BF",
      light_heading:"#3E3ED5",
      moderate_color:"#6A6ADC",
      dark_background:"#8989EB",
      light_background:"#C6C6FB",
    }
  },
  plugins: [],
}