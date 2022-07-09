// @ts-nocheck
/* eslint import/newline-after-import: 'off' */
const path = require("path")
const webpack = require("webpack")
// HTML
const HtmlWebpackPlugin = require("html-webpack-plugin")
// CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// JS
const {ESBuildMinifyPlugin} = require("esbuild-loader")
// Compression
const CompressionPlugin = require("compression-webpack-plugin")
// Service Worker
const {InjectManifest} = require("workbox-webpack-plugin")
// Extras
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
const {SourceMapDevToolPlugin} = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")

// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config()

// HTML
const htmlPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: "src/index.html",
})
// CSS
const cssPlugin = new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css",
  chunkFilename: "[name].[contenthash].css",
})
// JS
// TODO: verify new v5 behavior, "respect devtool option"
const esBuildMinifyPlugin = new ESBuildMinifyPlugin({
  target: "es2021",
  css: true,
})
// Compression
const brotliPlugin = new CompressionPlugin({
  test: /\.(js|css|html|svg)$/,
  filename: "[path][base].br",
  algorithm: "brotliCompress",
  threshold: 0,
  minRatio: 0.8,
  exclude: "sw.js",
  compressionOptions: {
    level: 11,
  },
})
// Service Worker
const swPlugin = new InjectManifest({
  swSrc: "./src/sw/sw.js",
  exclude: [/\.(br|map)$/],
  dontCacheBustURLsMatching: /\.(woff2|woff|jpg|jpeg|png|svg|gif|ico|txt)$/,
})
// Extras
const analyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
  analyzerMode: "static",
  generateStatsFile: true,
  reportFilename: "../reports/report.html",
  statsFilename: "../reports/stats.json",
})

const sourceMapsPlugin = new SourceMapDevToolPlugin({
  filename: "sourcemaps/[file].map",
  exclude: ["sw.js", /runtime\.*\.*/, /vendors\.*\.*/],
})

const copyPlugin = new CopyPlugin({
  patterns: [
    {from: "src/assets/logo", to: "logo/"},
    {from: "src/assets/manifest.json", to: "[name][ext]"},
  ],
})

const environmentPlugin = new webpack.DefinePlugin({
  PRODUCTION: process.env.NODE_ENV === "production",
  PUSHER_INSTANCE_ID: JSON.stringify(process.env.PUSHER_INSTANCE_ID),
})

const DEFAULT_PORT = 8080
const DEFAULT_PATH = "/"

let configs = {
  target: "web",
  mode: "development",
  devtool: "eval-source-map",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff2|woff)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [environmentPlugin, cssPlugin, htmlPlugin, copyPlugin],
  devServer: {
    hot: true,
    compress: true,
    port: DEFAULT_PORT,
    historyApiFallback: true,
    proxy: {
      "/api": {target: "http://localhost:3000"},
    },
    // TODO: refactor for v5, see https://github.com/webpack/webpack-dev-middleware
    devMiddleware: {
      publicPath: DEFAULT_PATH,
      stats: {
        assets: true,
        modules: false,
        children: false,
        entrypoints: false,
      },
    },
  },
}

if (process.env.NODE_ENV === "production") {
  configs = Object.assign({}, configs, {
    mode: "production",
    devtool: false,
    output: {
      clean: true,
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].js",
    },
    performance: {
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".br")
      },
    },
    optimization: {
      minimize: true,
      minimizer: [esBuildMinifyPlugin],
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            enforce: true,
            name: "vendors",
          },
          styles: {
            test: /[\\/]node_modules[\\/].css$/,
            chunks: "all",
            enforce: true,
            name: "vendors",
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          use: [
            {
              loader: "esbuild-loader",
              options: {
                loader: "tsx",
                target: "es2021",
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(woff2|woff)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext]",
          },
        },
        {
          test: /\.(jpg|jpeg|png|svg|gif)$/i,
          // FIXME: see image-webpack-loader github to correct docker usage
          use: ["image-webpack-loader"],
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
        },
      ],
    },
    plugins: [
      environmentPlugin,
      sourceMapsPlugin,
      analyzerPlugin,
      brotliPlugin,
      cssPlugin,
      htmlPlugin,
      copyPlugin,
      swPlugin,
    ],
    // TODO: refactor for v5
    stats: {
      assets: true,
      modules: false,
      children: false,
      entrypoints: false,
    },
  })
}

module.exports = configs
