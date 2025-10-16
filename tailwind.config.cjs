/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f6ff",
          100: "#efedff",
          200: "#ddd9ff",
          300: "#c9c0ff",
          400: "#9f86ff",
          500: "#6f46ff",
          600: "#5a36d9",
          700: "#3f2a9f",
        },
        accent: "#ff7ab6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};