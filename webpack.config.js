const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');

module.exports = {
  mode: 'development',
  entry: {
   bundle : path.resolve(__dirname, "./src/index.js")
  },
  devServer: {
    static: './dist',
  },
 plugins: [
   new HtmlWebpackPlugin({
     title: 'Output Management',
     template: "./src/template.html"
   }),
 ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
};