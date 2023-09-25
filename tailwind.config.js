/** @type {import('tailwindcss').Config} */
import { colors } from "tailwindcss/colors";

const COLORS = {
  primary: "#1D4ED8",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      ...COLORS,
    },
  },
  plugins: [],
};
