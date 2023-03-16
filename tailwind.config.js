/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4C67BD",

          "secondary": "#FB3640",

          "accent": "#E2F3F3",

          "neutral": "#1c1917",

          "base-100": "#180710",

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
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
