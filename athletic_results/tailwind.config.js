/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'maroon': {  DEFAULT: '#551221',  '50': '#BC2849',  '100': '#AD2543',  '200': '#901E38',  '300': '#72182C',  '400': '#551221',  '500': '#480F1C',  '600': '#3C0D17',  '700': '#2F0A12',  '800': '#22070D',  '900': '#160508'},
      },
      padding: {
        sm: '0.5px'
      }
    },
  },
  plugins: [],
}