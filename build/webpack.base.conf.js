var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app:path.resolve(__dirname, '../src/main.js'),
    antd:['antd'],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,//不希望被包括的路劲
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['antd'],
        },
      },
      {
      test: /\.css$/,
      loader: 'style!css'
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
          limit: 8192,
          name: 'images/[name].[ext]?[hash:8]'
        }
      },
      {test: /\.woff$/,loader: "url?limit=8192&minetype=application/font-woff?name=fonts/[name].[ext]"},
      {test: /\.woff2$/,loader: "url?limit=8192&mimetype=application/font-woff2?name=fonts/[name].[ext]"},
      {test: /\.ttf$/,loader: "url?limit=8192?name=fonts/[name].[ext]"},
      {test: /\.eot$/,loader: "url?limit=8192?name=fonts/[name].[ext]"},
      {test: /\.svg$/,loader: "url?limit=8192?name=fonts/[name].[ext]"}
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins : [ new webpack.ProvidePlugin({// 全局依赖jQuery,不需要import了
  		$ : "jquery"
	})],
}
