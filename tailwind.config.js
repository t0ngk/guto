/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    colors: {
      primary: {
        50: "#fdf8ed",
        100: "#f9e9cc",
        200: "#f2d195",
        300: "#ebb55e",
        400: "#e69c39",
        500: "#de7d24",
        600: "#c45d1b",
        700: "#a3401a",
        800: "#85331b",
        900: "#6e2b19",
        DEFAULT: "#de7d24",
      },
    },
    fontFamily: {
      prompt: ["Prompt", "sans-serif"],
    },
  },
};