const env = process.env.BABEL_ENV || process.env.NODE_ENV

const config = {
  presets: [
    ['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3}],
    ['@babel/preset-react'],
  ],
  plugins: [
    // TODO: see if this plugin really adds value to me
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-proposal-object-rest-spread'],
  ],
}

;(function devMode(mode) {
  if (mode == 'development' || mode == 'test') {
    // config.plugins.push('some-test-specific-plugin');
  }
})(env)

module.exports = config
