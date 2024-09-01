import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      primary: "#91897f",
      info: "#493f46",
      success: "#61a45e",
      danger: "#f44336",
      warning: "#de9426",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
