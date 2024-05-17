/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary": "#9d73ad",
        "primary": "#0f0d1d",
        "blue-secondary":'#3c72fc'
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
