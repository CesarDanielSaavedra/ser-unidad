/** @type {import('tailwindcss').Config} */
// Paleta tomada del Manual de Marca (admin doc/ser_unidad-MANUAL_DE_MARCA).
// Principales: gold (#957F48) y forest (#4E5A51).
// Secundarios: indigo, sage, clay, sky, mist, sand, blush.
// cream / ivory / forest.deep / gold.dark son tonos derivados para fondos y estados hover.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#957F48", dark: "#7A6739" },
        forest: { DEFAULT: "#4E5A51", deep: "#3B453E" },
        indigo: "#606AA1",
        sage: "#7B867E",
        clay: "#B27A64",
        sky: "#DCE1EC",
        mist: "#D9E1D9",
        sand: "#E7E2CD",
        blush: "#E2C8C1",
        cream: "#F4F1E8",
        ivory: "#FBF9F4",
      },
      fontFamily: {
        serif: ['"Noto Serif"', "Georgia", "serif"],
        sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        measure: "62ch",
      },
      keyframes: {
        drift: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift 240s linear infinite",
      },
    },
  },
  plugins: [],
};
