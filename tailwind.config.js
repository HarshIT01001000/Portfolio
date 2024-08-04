/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ["Cinzel", 'serif'],
        'harshit':["Rubik Doodle Shadow", "system-ui"],
        'roboto' :["Roboto Condensed", "sans-serif"],
        'quu':["Quattrocento", 'serif'],
      },
    },
  },
  plugins: [],
}

