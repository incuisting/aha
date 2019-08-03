const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  }
};

module.exports = {
  loaderRules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },

    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          ...cssLoader
        },
        'postcss-loader'
      ],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../src')
    },
    {
      test: /\.less/,
      include: path.resolve(__dirname, '../src'),
      exclude: /node_modules/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          ...cssLoader
        },
        'postcss-loader',
        'less-loader'
      ]
    },
    // {
    //   test: /\.scss/,
    //   include: path.resolve(__dirname, '../src'),
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader
    //     },
    //     {
    //       ...cssLoader
    //     },
    //     'postcss-loader',
    //     'sass-loader'
    //   ]
    // },
    {
      test: /\.(jpg|png|bmp|gif|svg|ttf|woff|woff2|eot)/,
      use: [
        {
          loader: 'url-loader',
          options: {
            // 小于这个大小的图片会变成base64 格式
            limit: 8192
          }
        }
      ]
    }
  ]
};
