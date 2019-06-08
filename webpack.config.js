/* eslint import/newline-after-import: 'off' */
const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let cssPlugin;
if (process.env.NODE_ENV === 'production') {
  cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].[hash].css",
    chunkFilename: "[id].[hash].css",
  });
} else {
  cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  });
}

const optimizeCss = new OptimizeCSSAssetsPlugin({});
const hotReloadPlugin = new HotModuleReplacementPlugin();
const cleanUpPlugin = new CleanWebpackPlugin();
const progressPlugin = new SimpleProgressWebpackPlugin({format: 'compact'});

const analyzerPlugin =
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: 'static',
    generateStatsFile: false,
    reportFilename: '../reports/bundle_report.html',
    statsFilename: '../reports/bundle_stats.json',
  });

const htmlPlugin =
  new HtmlWebpackPlugin({
    title: 'Barefoot',
    filename: 'index.html',
    template: 'src/index.html',
    favicon: 'src/assets/images/favicon.ico',
  });

const terser =
  new terserPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  });

// TODO: compression with brotli
// TODO: compress more text files, like fonts
const gzipPlugin =
  new CompressionPlugin({
    test: /.(js|css|html|svg|ttf)$/,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 0,
    minRatio: 0.8,
  });

const DEFAULT_PORT = 8080;

let configs = {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'assets': path.resolve(__dirname, 'src/assets/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'ducks': path.resolve(__dirname, 'src/ducks/'),
      'tests': path.resolve(__dirname, 'src/tests/'),
      'utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {hmr: true}
          },
          "css-loader",
          /*
          // TODO: debug why using MiniCssExtractPlugin breaks css-modules class injection
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'bf__[local]--[hash:base64:5]',
              importLoaders: 1,
            },
          },
           */
          "postcss-loader",
        ]
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
    cssPlugin,
    htmlPlugin,
    hotReloadPlugin,
  ],
  devServer: {
    hot: true,
    port: DEFAULT_PORT,
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
          styles: {
            test: /\.css$/,
            chunks: 'all',
            name: 'vendors',
            enforce: true,
          },
        },
      },
      minimizer: [
        terser,
        optimizeCss,
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
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
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {hmr: false}
            },
            'css-loader',
            'postcss-loader',
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
      cssPlugin,
      htmlPlugin,
    ],
  });
}

module.exports = configs;
