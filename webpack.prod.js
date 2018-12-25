const merge = require('webpack-merge');
const UglifyJSplugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    // 代码压缩
    minimizer: [
      new UglifyJSplugin({
        cache: true, // 启用缓存
        parallel: true, // 使用多进程运行改进编译速度
        sourceMap: true // 生成sourceMap映射文件
      }),
      new OptimizeCssAssetsWebpackPlugin({})
    ]
  }
});
