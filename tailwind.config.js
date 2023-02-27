/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    colors: {
      primary: '#DE7D24',
    },
    fontFamily: {
      prompt: ['Prompt', 'sans-serif'],
    }
  },
}
