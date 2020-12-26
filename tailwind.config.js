module.exports = {
  purge: {
    mode: "layers",
    content: [
      "./src/**/*.js",
      "./src/**/*.ts",
      "./src/**/*.jsx",
      "./src/**/*.tsx",
      "./src/**/*.html",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        body: "Roboto",
      },
      colors: {
        "regal-blue": "var(--regal-blue)",
      },
    },
  },
  variants: {},
  plugins: [],
}
