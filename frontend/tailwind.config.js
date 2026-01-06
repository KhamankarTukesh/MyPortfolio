/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#39FF14",
        "primary-hover": "#32e612",
        "background-dark": "#121212",
        "surface-dark": "#1E1E1E",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}