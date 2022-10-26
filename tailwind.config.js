/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage:{
        backimg:"url(Back/images/bg-logo.svg)"
      },
      keyframes: {
        cursor: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      },
      animation: {
        'cursor': 'cursor 1s steps(2, jump-none) infinite'
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],

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
    themes: ["light"],
  },
}

