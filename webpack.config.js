var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  context: __dirname + '/.tmp/',

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
    })
  ]
};
