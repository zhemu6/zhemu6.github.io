/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#36BCF7', // From their typing SVG color
        secondary: '#0D1117', // GitHub dark theme bg
      }
    },
  },
  plugins: [],
}
