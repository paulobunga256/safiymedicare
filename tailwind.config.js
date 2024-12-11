/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#06683B',
            50: '#F0FCF9',
            100: '#E1F9F1',
            200: '#B8EDD8',
            300: '#8FE1BF',
            400: '#66D5A6',
            500: '#3DC98D',
            600: '#06683B',
            700: '#055732',
            800: '#044629',
            900: '#033420'
          },
          blue: {
            DEFAULT: '#3F3F87',
            50: '#F5F5FF',
            100: '#E6E6FF',
            200: '#CCCCFF',
            300: '#9999FF',
            400: '#6666FF',
            500: '#3F3F87',
            600: '#333366',
            700: '#262645',
            800: '#191924',
            900: '#0C0C03'
          }
        }
      },
      backgroundColor: {
        primary: '#06683B',
        secondary: '#3F3F87',
        base: '#F0FCF9'
      },
      textColor: {
        primary: '#06683B',
        secondary: '#3F3F87'
      },
      ringColor: {
        primary: '#06683B',
        secondary: '#3F3F87'
      },
      borderColor: {
        primary: '#06683B',
        secondary: '#3F3F87'
      }
    }
  },
  plugins: []
};