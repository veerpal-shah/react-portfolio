/** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
         burtons: "burtons",
         futura: "futura",
         helvetica: "helvetica",
         sabon: "sabon",
         garamond: "garamond",
         rockwell: "rockwell",
         bodoni: "bodoni",
         proxima: "proxima\\ nova",
         georgia: "georgia",
         arial: "arial",
         majestic: "majestic"
      //   poppins: ["Poppins", "sans-serif"],
       },
    },
  },
  //plugins: [],
};