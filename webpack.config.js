var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  context: __dirname + '/.tmp/js/',

  entry: {
    base: ['./base.js']
  },

  output: {
    path: __dirname,
    filename: 'assets/js/[name].bundle.min.js'
  },

  plugins: [
    new UglifyJSPlugin({
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
        test: /\.vue$/,
        options: {}
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  resolveLoader: {
    alias: {
      'scss-loader': 'sass-loader',
      styles: '_scss/'
    },
  }

};
