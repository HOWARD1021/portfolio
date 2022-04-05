module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: "#888883",
        },
        faint_orange: '#d1b790',
        
      },
      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
}