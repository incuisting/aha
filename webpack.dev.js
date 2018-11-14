const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const apiMocker = require('webpack-api-mocker')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    before: function(app, server) {
      apiMocker(app, path.resolve(__dirname, 'mock/api.js'))
    }
  },
  devtool: 'source-map'
})
