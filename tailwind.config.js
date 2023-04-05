/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}"
  ],
  plugins: [],
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
        DEFAULT: "#de7d24"
      },
      success: {
        '50': '#ecfdf6',
        '100': '#d2f9e7',
        '200': '#a9f1d4',
        '300': '#63e2b7',
        '400': '#37d0a1',
        '500': '#13b689',
        '600': '#089370',
        '700': '#06765d',
        '800': '#085d4a',
        '900': '#074d3e',
        '950': '#032b24',
        DEFAULT: "#3ab82f"
      }
    },
    fontFamily: {
      prompt: ["Prompt", "sans-serif"]
    },
  },
};
