module.exports = {
  presets: [
    ["@babel/preset-env", {useBuiltIns: "usage", corejs: "3.21"}],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"],
  ],
}
