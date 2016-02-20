var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin(
          {
                name: "common",//一个文件至少被require两次才能放在CommonChunk里
                minChunks: 2
           }
        ),//提取多个路口文件的公共部分
  ],
  entry: {
    app:path.resolve(__dirname, '../src/main.js'),
    antd:['antd'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: { //resolve 指定可以被 import 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 import Hello from 'Hello' 引用
    extensions: ['', '.js', '.jsx'],
    // alias: {  //此项为路径别名
    //   'react': path.resolve(__dirname, 'node_modules/react/dist/react.min.js') //form 'react' 直接指向minjs
    // }
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//不希望被包括的路劲
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['add-module-exports', 'typecheck','antd'],
        },
      },
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['add-module-exports', 'typecheck','antd'],
        },
      },
      {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          `less?{"sourceMap":true,"modifyVars":{"primary-color":"#00A0E8"}}`
        )
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {test: /\.woff$/,loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2$/,loader: "url?limit=10000&mimetype=application/font-woff2"},
      {test: /\.ttf$/,loader: "file"},
      {test: /\.eot$/,loader: "file"},
      {test: /\.svg$/,loader: "file"}
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

}
