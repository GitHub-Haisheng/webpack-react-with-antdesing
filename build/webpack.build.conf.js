var webpack = require('webpack')
var path = require('path')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('style.css'),
  new webpack.DefinePlugin({//添加全局常量
    'process.env': {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({//压缩js
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin(//提取公共文件
  {
    name: "common",
    minChunks: 2
  })
])
config.output = {
  path: path.resolve(__dirname, '../dist/static'),
  publicPath: '/static/',
  chunkFilename: "[id].[hash].bundle.js",
  filename: '[name].min.js'
}


module.exports = config
