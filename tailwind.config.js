/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
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
      white:colors.white,
      black:colors.black,
      button_color:"#5694FE"
    },
    extend:{
      screens:{
        "sm_max":{"max":"768px"},
        "sm":"640px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
      }
    }
    
  },

  plugins: [],
}