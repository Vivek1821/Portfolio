/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030f1c ",
        secondary: "#364146",
        tertiary: "#061729",
        textBlue: "#060607",
        textGrey: "#374553",
        textGold: "#FFD700",
      },
      height: {
        76: "300px",
        86: "350px",
      },
    },
  },
  plugins: [],
};
