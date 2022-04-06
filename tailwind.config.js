module.exports = {
  purge: false,
  jit: true,
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
