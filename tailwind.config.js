module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(52, 210, 153, 1)',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
    fontFamily: {
      body: ['Nunito'],
    }
  },
  plugins: [],
}
