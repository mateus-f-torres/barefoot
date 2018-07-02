const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglyJs =
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
});

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); 
const optimizeCss =
  new OptimizeCSSAssetsPlugin({});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssPlugin =
  new MiniCssExtractPlugin({
    filename: "styles.css"  
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    title: 'R_R template PROD',
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
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('dist', {});
 
module.exports = { 
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'src/assets/stylesheets'),
      Images: path.resolve(__dirname, 'src/assets/images')
    }
  },
  optimization: {
    minimizer: [
      uglyJs,
      optimizeCss
    ]
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[path][name].[ext]",
              context: "src/assets/images/" 
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }
        ]
      }
    ]
  },
  plugins: [
    cleanPlugin,
    cssPlugin,
    htmlPlugin
  ]
};