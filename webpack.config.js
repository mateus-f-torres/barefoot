/* eslint import/newline-after-import: 'off' */
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {InjectManifest} = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const cssPlugin = (function (env) {
  if (env == 'production') {
    return new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    })
  } else {
    return new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  }
})(process.env.NODE_ENV)

const optimizeCss = new OptimizeCSSAssetsPlugin({})
const cleanUpPlugin = new CleanWebpackPlugin()

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

const copyPlugin = new CopyPlugin({
  patterns: [
    {from: 'src/assets/icons', to: 'icons/'},
    {from: 'src/assets/manifest-v*', to: '[name].[ext]'},
  ],
})

const terser = new TerserPlugin()

const brotliPlugin = new CompressionPlugin({
  test: /\.(js|css|html|svg)$/,
  filename: '[path].br[query]',
  algorithm: 'brotliCompress',
  threshold: 0,
  minRatio: 0.8,
  // TODO: undertand why this plugin breaks Workbox InjectManifest
  exclude: 'sw.js',
  compressionOptions: {
    level: 11,
  },
})

const DEFAULT_PORT = 8080
const DEFAULT_PATH = '/'

let configs = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
        test: /\.(woff2|woff)$/,
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
  plugins: [cleanUpPlugin, cssPlugin, htmlPlugin, copyPlugin],
  devServer: {
    hot: true,
    compress: true,
    port: DEFAULT_PORT,
    publicPath: DEFAULT_PATH,
    historyApiFallback: true,
    proxy: {
      '/api': {target: 'http://localhost:3000'},
    },
    stats: {
      assets: true,
      modules: false,
      children: false,
      entrypoints: false,
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
    performance: {
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.br')
      },
    },
    optimization: {
      minimize: true,
      minimizer: [terser, optimizeCss],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name: 'vendors',
          },
          styles: {
            test: /[\\/]node_modules[\\/].css$/,
            chunks: 'all',
            enforce: true,
            name: 'vendors',
          },
        },
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
            },
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(woff2|woff)$/,
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
          test: /\.(jpg|jpeg|png|svg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5 * 1024,
                fallback: 'file-loader',
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
    plugins: [
      analyzerPlugin,
      cleanUpPlugin,
      brotliPlugin,
      cssPlugin,
      htmlPlugin,
      copyPlugin,
      new InjectManifest({
        swSrc: './src/sw.js',
        exclude: [/\.(js|css)$/, 'sw.js.map'],
        dontCacheBustURLsMatching: /\.(js|css|woff2|woff|png|ico)/,
      }),
    ],
    stats: {
      assets: true,
      modules: false,
      children: false,
      entrypoints: false,
    },
  })
}

module.exports = configs
