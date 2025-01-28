/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Noto Serif'", "serif"], // Para Noto Serif (variable o estática)
        vietnam: ["'Be Vietnam'", "sans-serif"], // Para Be Vietnam (estática)
      },
    },
  },
  plugins: [],
};