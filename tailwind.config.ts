import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        madeEvolveSans: ["MadeEvolveSans", "sans-serif"],
        madeEvolveSansEVO: ["MadeEvolveSansEVO", "sans-serif"],
        azeretMono: ["Azeret Mono", "monospace"],
      },
      colors: {
        primary: {
          100: "#669aca",
          200: "#4d89c1",
          300: "#3379b9",
          400: "#1a68b0",
          500: "#0057a7",
          600: "#004e96",
          700: "#004686",
          800: "#003d75",
          900: "#003464",
        },
        secondary: {
          100: "#87dcff",
          200: "#73d6ff",
          300: "#5fd0ff",
          400: "#4bcaff",
          500: "#37c4ff",
          600: "#32b0e6",
          700: "#2c9dcc",
          800: "#2789b3",
          900: "#217699",
        },
        navyBlue: {
          100: "#6d7c8f",
          200: "#54667d",
          300: "#3c516a",
          400: "#233b58",
          500: "#0b2545",
          600: "#0a213e",
          700: "#091e37",
          800: "#081a30",
          900: "#071629",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
