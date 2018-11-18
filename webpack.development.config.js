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
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['js', 'jsx'],
    alias: {
      'Store': path.resolve(__dirname, 'src/stores/'),
      'Components': path.resolve(__dirname, 'src/views/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Types': path.resolve(__dirname, 'src/types/'),
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
              outputPath: 'images/'
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
  ],
};

if (process.env == 'production') {
  // change stuff
}

module.exports = configs;
