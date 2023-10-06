const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: false,
      client: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Custom template',
    // Load a custom template (lodash by default)
        template: 'indextemplate.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      },
      {
        test: /page\.html$/i,
        loader: 'file-loader'
      },
    ],
  }
};