const env = process.env.BABEL_ENV || process.env.NODE_ENV;

const config = {
  presets: [
    ['@babel/preset-env', {useBuiltIns: 'usage'}],
    ['@babel/preset-react'],
    ['@babel/preset-flow'],
  ],
  plugins: [
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-flow-strip-types', {requireDirective: true}],
    ['@babel/plugin-proposal-class-properties'],
  ],
};

(function devMode(mode) {
  if (mode == 'development' || mode == 'test') {
    config.plugins.unshift('styled-components');
  }
})(env);

module.exports = config;
