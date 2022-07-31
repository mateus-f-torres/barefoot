import path from "path"
import CopyPlugin from "copy-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import {ESBuildMinifyPlugin} from "esbuild-loader"
import {InjectManifest} from "workbox-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CompressionPlugin from "compression-webpack-plugin"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import {DefinePlugin, SourceMapDevToolPlugin} from "webpack"

import "dotenv/config"

const htmlPlugin = new HtmlWebpackPlugin({
  filename: "index.html",
  template: "src/index.html",
})

const cssPlugin = new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css",
  chunkFilename: "[name].[contenthash].css",
})

const esBuildMinifyPlugin = new ESBuildMinifyPlugin({
  sourcemap: true,
  target: "es2021",
  css: true,
})

const brotliPlugin = new CompressionPlugin({
  test: /\.(js|css|html|svg|json)$/,
  filename: "[path][base].br",
  algorithm: "brotliCompress",
})

const swPlugin = new InjectManifest({
  swSrc: "./src/sw/sw.js",
  exclude: [/\.(br|map)$/],
  dontCacheBustURLsMatching: /\.(woff2|woff|jpg|jpeg|png|svg|gif|ico|txt)$/,
})

const analyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
  analyzerMode: "static",
  generateStatsFile: true,
  reportFilename: "../reports/report.html",
  statsFilename: "../reports/stats.json",
})

const sourceMapsPlugin = new SourceMapDevToolPlugin({
  filename: "sourcemaps/[file].map",
  include: [/main\.*\.*/],
  exclude: ["sw.js", /runtime\.*\.*/, /vendors\.*\.*/],
})

const copyPlugin = new CopyPlugin({
  patterns: [
    {from: "src/assets/logo", to: "logo/"},
    {from: "src/assets/manifest.json", to: "[name][ext]"},
  ],
})

const environmentPlugin = new DefinePlugin({
  PRODUCTION: process.env["NODE_ENV"] === "production",
  PUSHER_INSTANCE_ID: JSON.stringify(process.env["PUSHER_INSTANCE_ID"]),
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

if (process.env["NODE_ENV"] === "production") {
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
      assetFilter: function (assetFilename: any) {
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
