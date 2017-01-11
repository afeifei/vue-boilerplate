var config = require('./config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./webpack/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  // module: {
  //   loaders: utils.styleLoaders({ sourceMap: true })
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.dev.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrors()
  ]
})
