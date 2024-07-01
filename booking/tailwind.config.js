/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['BlinkMacSystemFont', '-apple-system', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        customRed: 'rgb(163, 0, 0)',
      },
      fontSize: {
        '14px': '14px',
      },
      lineHeight: {
        '20px': '20px',
      },
      fontWeight: {
        '500': 500,
      },
    },
  },
  plugins: [],
}

