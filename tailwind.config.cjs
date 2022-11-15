/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      md: "1024px",
      sm: "898px",
      mn: "650px"
    }
  },
  plugins: [],
}
