// TODO: read about postcss-preset-env
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-custom-properties'),
    // TODO: read about require('postcss-nesting'),
  ]
};
