const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { loaderRules } = require('./webpackConfig/loaderConfig')
module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: loaderRules
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'utils')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', //打包入口文件
      chunkFilename: 'css/[id].css' //用来打包import('module')方法中引入的模块
    })
  ]
}
