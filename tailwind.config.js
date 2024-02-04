/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./lib/**/*.{js,ts,jsx,tsx}"],
  // Toggle dark-mode based on .dark class
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
