const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssPlugin =
  new MiniCssExtractPlugin({
    filename: "styles.css"  
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    filename: 'index.html',
    template: 'src/index.html'
});
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('lib', {});

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerPlugin =
  new BundleAnalyzerPlugin();
 

module.exports = { 
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  resolve: { 
    alias: {
      Styles: path.resolve(__dirname, 'src/assets/stylesheets'),
      Images: path.resolve(__dirname, 'src/assets/images')
    }
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-hot-loader",
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
    analyzerPlugin,
    cleanPlugin,
    cssPlugin,
    htmlPlugin
  ]
};
