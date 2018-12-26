const autoprefixer = require('autoprefixer');
const postcssPxToRem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    autoprefixer,
    postcssPxToRem({
      // 指定根节点的字体大小
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ]
};
