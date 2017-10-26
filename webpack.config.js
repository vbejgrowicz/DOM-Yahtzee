const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].[chunkhash].css');

const config = {
  entry: {
    bundle: './src/app.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=/dice/[name].[ext]',
      },
    ],
  },
  plugins: [
    extractCSS,
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
    }),
    new HtmlWebpackPlugin({
      title: 'Yahtzee',
      filename: 'index.html',
      template: './index.html',
    }),
  ],
};

module.exports = config;
