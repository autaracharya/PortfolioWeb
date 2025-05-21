module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Include all files in the `pages` folder
    "./components/**/*.{js,ts,jsx,tsx}" // Include all files in the `components` folder
  ],
  darkMode: "class",
  theme: {
    extend: {}, // Extend default Tailwind theme here if needed
  },
  plugins: [
    require("@tailwindcss/forms"), // Optional: Adds better form styling
    require("@tailwindcss/typography"), // Optional: Adds typography styles
  ],
};
