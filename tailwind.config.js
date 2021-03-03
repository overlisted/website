module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Inter", "Ubuntu", "Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "github": "#231f20",
        "npm": "#c12127",
      },
    },
  },
  variants: {
    extend: {
      margin: ["hover"],
    },
  },
  plugins: [],
}
