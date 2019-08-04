const merge = require('webpack-merge');
const path = require('path');
const apiMocker = require('mocker-api');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    before: (app) => {
      apiMocker(app, path.resolve(__dirname, 'mock/api.js'));
    }
  },
  devtool: 'source-map'
});
