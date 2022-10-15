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
      short:'linear-gradient(#f40752,#f9ab8f)',
      sufficient:'linear-gradient(#fbd07c,#e9d022)',
      extra:'linear-gradient(#30c67c,#07f49e)',
      white:'#ffffff',
      delete:'#F15152',
      edit:'#1789FC',
      card:'#e4e4e4',
      card_border:'#FEF9FF'
    }
  },
  plugins: [],
}