/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#172c3b",

          "secondary": "#9d4a4a",

          "accent": "#180710",

          "neutral": "#1c1917",

          "base-100": "#E2F3F3",

          "info": "#84B7DC",

          "success": "#21A68B",

          "warning": "#EEAF5D",

          "error": "#EE6853",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
