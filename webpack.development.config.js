const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    filename: 'index.html',
    template: 'src/index.html',
});
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('dist', {});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin();
 
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const progressPlugin =
  new SimpleProgressWebpackPlugin({
    format: 'expanded',
  });

module.exports = { 
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      'Store': path.resolve(__dirname, 'src/store/'),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Types': path.resolve(__dirname, 'types/'),
      'Mocks': path.resolve(__dirname, '__mocks__/'),
    },
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    progressPlugin,
    analyzerPlugin,
    cleanPlugin,
    htmlPlugin,
  ],
};
