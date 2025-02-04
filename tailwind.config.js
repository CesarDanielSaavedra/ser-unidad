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
      colors: {
        primary: {
          light: "#957F48",
          dark: "#4E5A51",
        },
        secondary: {
          blue: "#606AA1",
          gray: "#7B867E",
          brown: "#B27A64",
          lightGray: "#D9E1D9",
          beige: "#E7E2CD",
          peach: "#E2C8C",
        },
      },
    },
  },
  plugins: [],
};