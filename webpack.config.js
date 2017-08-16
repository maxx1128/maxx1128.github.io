'use strict';

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  context: path.resolve(''),
  entry: ["./_sass/main.scss", "./_javascript/main.js"],
  output: {
    path: path.resolve('assets/'),
    filename: 'bundle.js'
  },

  watch: true,

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'autoprefixer-loader', 'sass-loader']
        })
      }
    ]
  }
};
