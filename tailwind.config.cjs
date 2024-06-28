/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#2897ec",
        "primary-darker": "#1d519a",
        secondary: "#f8a833",
        "text-primary": "#231f20",
        "text-secondary": "#9b9b9b",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        display: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
