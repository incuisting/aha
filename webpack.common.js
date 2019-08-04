const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loaderRules } = require('./webpackConfig/loaderConfig');

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')]
    // 开头引入 polyfill以解决saga 引入时的一个generateruntime 的一个报错
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
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 打包入口文件
      chunkFilename: 'css/[id].css' // 用来打包import('module')方法中引入的模块
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
