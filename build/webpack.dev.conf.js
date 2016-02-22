var webpack = require('webpack')
var path = require('path')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.devtool = 'source-map';
config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('style.css'),
])
config.output = {
  path: path.resolve(__dirname, '../dist/static'),
  publicPath: 'static/',
  filename: '[name].js'
}

module.exports = config
