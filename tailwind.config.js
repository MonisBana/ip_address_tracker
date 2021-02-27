module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('../src/assets/images/pattern-bg.png')",
      }),
      height: (theme) => ({
        "screen/3": "calc(100vh / 3)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
