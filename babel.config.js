/* eslint no-var: 'off' */

var env = process.env.BABEL_ENV || process.env.NODE_ENV;

var config = {
  presets: [
    ['@babel/preset-env', {useBuiltIns: 'usage'}],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};

(function devMode(mode) {
  if (mode == 'development' || mode == 'test') {
    config.plugins.unshift('styled-components');
  }
})(env);

module.exports = config;
