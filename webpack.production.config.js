const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglyJs =
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    filename: 'index.html',
    template: 'src/index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
});

const CompressionPlugin = require('compression-webpack-plugin');
const gzipPlugin =
  new CompressionPlugin({
    test: /\.js$/,
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 0,
    minRatio: 0.8,
  });
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('dist', {});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin();
 
module.exports = { 
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  resolve: {
    alias: {
      Store: path.resolve(__dirname, 'src/store/'),
      Component: path.resolve(__dirname, 'src/components/'),
      Types: path.resolve(__dirname, '__types__/'),
    },
  },
  optimization: {
    minimizer: [
      uglyJs,
    ]
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: true
          }
        }
      },
    ]
  },
  plugins: [
    analyzerPlugin,
    cleanPlugin,
    gzipPlugin,
    htmlPlugin
  ]
};
