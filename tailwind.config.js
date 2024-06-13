/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/assets/banner-bg.jpg')",
        'dark-bg': "url('/assets/dark-bg.jpg')",
        'main-bg': "url('/assets/main-bg.jpg')",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        customColor: '#7453a1',
      },
    },
  },
  plugins: [],
}

