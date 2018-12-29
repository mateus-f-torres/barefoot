const path = require('path');

const webpack = require('webpack');
const hmrPlugin =
  new webpack.HotModuleReplacementPlugin();

const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin =
  new CleanWebpackPlugin('dist', {});

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
    title: 'GoToMarket',
    filename: 'index.html',
    template: 'src/index.html',
    // TODO ver o minify default agir em prod
  });

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const miniCssPlugin =
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  });

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const optimizeCss =
  new OptimizeCssAssetsPlugin({});

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglyfyPlugin =
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
  context: path.resolve(__dirname, 'src')
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['js', 'jsx'],
    alias: {
      'alias': path.resolve(__dirname, 'src/source/'),
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
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
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
    analyzerPlugin,
    cleanPlugin,
    miniCssPlugin,
    htmlPlugin,
    hmrPlugin,
  ],
  devServer: {
    hot: true,
    port: '3020',
    host: '0.0.0.0',
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {poll: true},
    proxy: {
      '/onmaps': {target: 'http://localhost:88'},
      '/consulta': {target: 'http://localhost:88'},
      '/mapviewer': {target: 'http://localhost:88'},
      '/indexbuilder': {target: 'http://localhost:88'},
      '/settings/rs': {target: 'http://localhost:88'},
      '/api/gotomarket': {target: 'http://localhost:88'},
      '/api/portfolio': {target: 'http://localhost:88'},
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
            name: 'styles',
            enforce: true,
          },
        },
      },
      minimizer: [
        uglyfyPlugin,
        optimizeCss,
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
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'less-loader',
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
          test: /\.(jpg|jpeg|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5 * 1024,
                fallback: 'file-loader',
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
              },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
    plugins: [
      analyzerPlugin,
      cleanPlugin,
      gzipPlugin,
      miniCssPlugin,
      htmlPlugin,
    ],
  });
  /*
  htmlPlugin.minify = {
    collapsWhitespace: true,
    keepClosingSlash: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedudantAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
  };
  */
}

module.exports = configs;
