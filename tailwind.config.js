/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar')],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
