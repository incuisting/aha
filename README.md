## 基础使用

### 项目安装

`npm install`

### 项目启动

`npm run start`

### 项目打包

`npm run build`

## 目录结构

```javascript
│  .eslintrc.js // eslint 配置文件
│  .gitignore
│  .prettierrc // prettier 配置文件
│  package-lock.json
│  package.json
│  postcss.config.js // postcss 配置文件
│  Readme.md
│  webpack.common.js  // dev 和 prod 共同的webpack 配置文件
│  webpack.dev.js // dev 模式的 webpack 配置文件
│  webpack.prod.js // prod 模式的 webpack  配置文件
│
├─mock
│      api.js // 接口mock 文件
│
├─public
│      antm-viewport.js // 移动端高清屏幕自动适配文件
│      antm-viewport.min.js
│      index.html // 首页模板
│
├─src
│  │  index.js // react入口文件
│  │  normalize.css
│  │  router.js // 路由配置文件
│  │  store.js // redux 根文件
│  │
│  ├─actions
│  │      counter.js // 示例action
│  │      index.js
│  │
│  ├─components
│  │      app.css // 示例css
│  │      App.js // 示例 react
│  │      app.less // 示例less
│  │      app.scss // 示例scss
│  │      Footer.js
│  │      Link.js
│  │      Nav.js
│  │      Todo.js
│  │      TodoList.js
│  │
│  ├─containers
│  │      AddTodo.js // 示例containers 组件
│  │      Counter.js
│  │      FilterLink.js
│  │      VisibleTodoList.js
│  │
│  ├─reducers
│  │      counter.js //示例reducer
│  │      index.js //reducer root 文件
│  │      todos.js
│  │      visibilityFilter.js
│  │
│  ├─sagas //saga 文件夹
│  │      index.js //示例saga
│  │
│  └─utils //工具文件夹
│          renderRoutes.js // router 生成文件
│
└─webpackConfig //webapck 配置生成文件
        loaderConfig.js // loader配置生成文件
```
