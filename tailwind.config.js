/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "hublife-primary": "#F7822F",
        "hublife-secondary": "#FFCD4F"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

