/* eslint import/newline-after-import: 'off' */
const path = require('path')
// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// JS
const TerserPlugin = require('terser-webpack-plugin')
// Compression
const CompressionPlugin = require('compression-webpack-plugin')
// Service Worker
const {InjectManifest} = require('workbox-webpack-plugin')
// Extras
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {SourceMapDevToolPlugin} = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

// HTML
const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html',
})
// CSS
const cssPlugin = (function (env) {
  if (env == 'production') {
    return new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    })
  } else {
    return new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    })
  }
})(process.env.NODE_ENV)

const optimizeCss = new OptimizeCSSAssetsPlugin({})
// JS
const terserPlugin = new TerserPlugin({
  sourceMap: true,
})
// Compression
const brotliPlugin = new CompressionPlugin({
  test: /\.(js|css|html|svg)$/,
  filename: '[path].br[query]',
  algorithm: 'brotliCompress',
  threshold: 0,
  minRatio: 0.8,
  exclude: 'sw.js',
  compressionOptions: {
    level: 11,
  },
})
// Service Worker
const swPlugin = new InjectManifest({
  swSrc: './src/sw/sw.js',
  exclude: [/\.(br|map)$/],
  dontCacheBustURLsMatching: /\.(js|css|woff2|woff|png|ico|txt)$/,
})
// Extras
const analyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
  analyzerMode: 'static',
  generateStatsFile: true,
  reportFilename: '../reports/report.html',
  statsFilename: '../reports/stats.json',
})

const cleanUpPlugin = new CleanWebpackPlugin()

const sourceMapsPlugin = new SourceMapDevToolPlugin({
  filename: 'sourcemaps/[file].map',
  exclude: ['sw.js', /runtime\.*\.*/, /vendors\.*\.*/],
})

const copyPlugin = new CopyPlugin({
  patterns: [
    {from: 'src/assets/logo', to: 'logo/'},
    {from: 'src/assets/manifest.json', to: '[name].[ext]'},
  ],
})

const DEFAULT_PORT = 8080
const DEFAULT_PATH = '/'

let configs = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
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
    devtool: false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },
    performance: {
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.br')
      },
    },
    optimization: {
      minimize: true,
      minimizer: [terserPlugin, optimizeCss],
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            enforce: true,
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
      sourceMapsPlugin,
      analyzerPlugin,
      cleanUpPlugin,
      brotliPlugin,
      cssPlugin,
      htmlPlugin,
      copyPlugin,
      swPlugin,
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
