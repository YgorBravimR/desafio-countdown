module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          black700: "var(--black700)",
          purple: "var(--purple)",
          lightGrey: "var(--lightGrey)",
          textColor: "var(--textColor)",
          modalBg: "var(--modalBg)",

      },
      backgroundImage: {
        topBotImg: "url('/top-bottom-img.svg')",
        topBotImg2: "url('/top-bottom-img2.png')"
      },
      fonts: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: []
}