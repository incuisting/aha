## 概览

Webpack 配置上支持了,React 全家桶,TypeScript 的支持,打包时提取 dll 文件.配置了 webpack 自带的代码分割.配置式的数据 mock.

## 一些可选项

- pxTorem  
  如果不需要项目中的 px 单位自动编译成 rem 单位,可以把`postcss.config.js`中的`postcssPxToRem`方法删除
- normalize.css  
  默认没有引入项目,不过保存了一份样式文件,需要可以自行引入.

## 基础使用

### 项目安装

`npm install`

### 项目启动

`npm run start`

### 项目打包

同时打包 dll 和基础文件  
`npm run build`  
单独打包 dll  
`npm run build:dll`  
单独打包基础文件  
`npm run build:base`

## 样式

支持:less,原生 css,css module 的写法

## 数据 mock

mock 接口的配置文件,接口的配置方法可以参考插件文档https://github.com/jaywcjlove/mocker-api/tree/master

## TODO

- happypack
- cli
- 易用性的优化
