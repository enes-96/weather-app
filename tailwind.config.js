module.exports = {
  content: ["./dist/**/*.html"],
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.js"], // Add your application's files here
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
