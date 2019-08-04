const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

const vendors = [
  'react',
  'react-dom',
  'redux',
  'redux-saga',
  'prop-types',
  'react-redux',
  'react-router-dom'
];

module.exports = {
  entry: { vendors },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist', 'dll'),
    library: '_dll_[name]' // dll的全局变量名
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]', // dll的全局变量名
      path: path.join(__dirname, 'dist', 'dll', '[name].manifest.json') // 描述生成的manifest文件
    })
  ]
};
