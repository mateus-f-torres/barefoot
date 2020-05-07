/* eslint import/newline-after-import: 'off' */
const path = require('path')
const {HotModuleReplacementPlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {GenerateSW} = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const cssPlugin = (function (env) {
  if (env == 'production') {
    return new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  } else {
    return new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  }
})(process.env.NODE_ENV)

const optimizeCss = new OptimizeCSSAssetsPlugin({})
const hotReloadPlugin = new HotModuleReplacementPlugin()
const cleanUpPlugin = new CleanWebpackPlugin()
const progressPlugin = new SimpleProgressWebpackPlugin({format: 'compact'})

const analyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
  analyzerMode: 'static',
  generateStatsFile: false,
  reportFilename: '../reports/bundle_report.html',
  statsFilename: '../reports/bundle_stats.json',
})

const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html',
})

const copyPlugin = new CopyPlugin([
  {from: 'src/assets/icons', to: 'icons/'},
  'src/manifest.json',
])

const terser = new TerserPlugin()

// TODO: compression with brotli
const gzipPlugin = new CompressionPlugin({
  test: /.(js|css|html|svg|ttf)$/,
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  threshold: 0,
  minRatio: 0.8,
})

const DEFAULT_PORT = 8080

let configs = {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {hmr: true},
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
    copyPlugin,
    hotReloadPlugin,
  ],
  devServer: {
    hot: true,
    port: DEFAULT_PORT,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {target: 'http://localhost:3000'},
    },
  },
}

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
      minimize: true,
      minimizer: [terser, optimizeCss],
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
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {hmr: false},
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
          test: /\.(jpg|jpeg|png|svg|gif)$/i,
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
      ],
    },
    plugins: [
      progressPlugin,
      analyzerPlugin,
      cleanUpPlugin,
      gzipPlugin,
      cssPlugin,
      htmlPlugin,
      copyPlugin,
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  })
}

module.exports = configs
