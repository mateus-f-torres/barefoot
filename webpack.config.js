/* eslint import/newline-after-import: 'off' */
const path = require('path');

const webpack = require('webpack');
const hotReloadPlugin =
  new webpack.HotModuleReplacementPlugin();

const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanUpPlugin =
  new CleanWebpackPlugin('dist', {});

const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const progressPlugin =
  new SimpleProgressWebpackPlugin({
    format: 'compact',
  });

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static',
    generateStatsFile: true,
    reportFilename: '../reports/bundle_report.html',
    statsFilename: '../reports/bundle_stats.json',
  });

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin =
  new HtmlWebpackPlugin({
    title: 'Barefoot',
    filename: 'index.html',
    template: 'src/index.html',
    favicon: 'src/assets/images/favicon.ico',
  });

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyJs =
  new UglifyJsPlugin({
    test: /.js$/,
    include: undefined,
    exclude: undefined,
    cache: true,
    parallel: true,
    sourceMap: true,
  });

const CompressionPlugin = require('compression-webpack-plugin');
const gzipPlugin =
  new CompressionPlugin({
    test: /.js$/,
    include: undefined,
    exclude: undefined,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 0,
    minRatio: 0.8,
  });

let configs = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
        use: [
          {
            loader: 'babel-loader',
          }
        ],
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
        ],
      },
    ],
  },
  plugins: [
    progressPlugin,
    cleanUpPlugin,
    htmlPlugin,
    hotReloadPlugin,
  ],
  devServer: {
    hot: true,
    port: '8080',
    // TODO: adicionar nginx, host: '0.0.0.0',
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    // TODO: entender custo, watchOptions: {poll: true},
    // TODO: ver necessidade, historyApiFallback: true,
    proxy: {
      '/api': {target: 'http://localhost:3000'},
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  configs = Object.assign({}, configs, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[chunkhash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name: 'vendors',
          },
        },
      },
      minimizer: [
        uglifyJs,
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                compact: true,
              },
            }
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5 * 1024,
                fallback: 'file-loader',
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
              },
            },
            'image-webpack-loader',
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 5 * 1024,
                noquotes: true,
                fallback: 'file-loader',
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
              },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
    plugins: [
      progressPlugin,
      analyzerPlugin,
      cleanUpPlugin,
      gzipPlugin,
      htmlPlugin,
    ],
  });
}

module.exports = configs;
