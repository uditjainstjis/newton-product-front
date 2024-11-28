/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js","./src/components/*/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

