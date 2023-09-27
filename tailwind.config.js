/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */ ],
  theme: {
      extend: {
          colors: {
              'brown': '#3D3230',
              'green': '#26B35E',
          },
      },
  },
  plugins: [],
}