/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "280px",
      sm: "640px",
      md: "780px",
      lg: "1026px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        header: "#0d0d0d",
        nav: "#3e3e3e",
        yellow: "#f2cb57",
        grey: "#f5f5f5",
        fontGrey: "#f2f2f2",
      },
    },
  },
  plugins: [],
};