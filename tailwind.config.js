/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
      primary: '#FF6363',
      secondary: {
        100: '#E2E2D5',
        200: '#888883',
    },
  },
},
  plugins: [],
}
}