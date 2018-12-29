/* eslint import/newline-after-import: 'off' */
/* eslint import/no-extraneous-dependencies: 'off' */
/* eslint operator-linebreak: 'off' */
/* eslint prefer-destructuring: 'off' */
/* eslint quote-props: 'off' */
const path = require('path');

const webpack = require('webpack');
const hmrPlugin =
  new webpack.HotModuleReplacementPlugin();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin =
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  });

const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin =
  new CleanWebpackPlugin('dist', {});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static',
    reportFilename: 'report.html',
    generateStatsFile: true,
    statsFilename: 'stats.json',
  });

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const progressPlugin =
  new SimpleProgressWebpackPlugin({
    format: 'expanded',
  });

const configs = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },

  resolve: {
    extensions: ['js', 'jsx'],
    alias: {
      'Views': path.resolve(__dirname, 'src/views/'),
      'Stores': path.resolve(__dirname, 'src/stores/'),
      'Services': path.resolve(__dirname, 'src/services/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Types': path.resolve(__dirname, 'src/types/'),
      'Mocks': path.resolve(__dirname, '__mocks__/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    progressPlugin,
    analyzerPlugin,
    cleanPlugin,
    htmlPlugin,
    hmrPlugin,
  ],
};

if (process.env == 'production') {
  // change stuff
}

module.exports = configs;
