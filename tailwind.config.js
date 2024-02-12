/** @type {import('tailwindcss').Config} */
export default {
  prefix: "gb-",
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  // Toggle dark-mode based on .dark class
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0A79DF",
        secondary: "#00CCCD",
      },
    },
  },
  plugins: [],
};
