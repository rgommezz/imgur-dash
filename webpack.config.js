var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'whatwg-fetch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/styles/index.scss',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  debug: true,
  devtool: ['eval', 'source-maps'],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src/js')
    }, {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"],
      include: path.join(__dirname, 'src/styles')
    }]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
