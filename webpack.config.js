const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Nikola Spalevic',
      favicon: path.resolve(__dirname, './favicon.ico')
    }),
    new MiniCssExtractPlugin()
  ]
}