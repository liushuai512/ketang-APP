## react 技术栈
- react react-router4 redux react-redux
```

##初始化package.json
```
npm init -y
```


redux:管理数据
react-redux:用来链接react和react-redux的
```



## webpack

```
npm install webpack webpack-dev-server

yarn add webpack webpack-dev-server

webpack:进行打包
webpack-dev-server:起后台服务的
```

## babel 用来解析

```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D

babel-loader：转义
```

## react
```
npm install react redux react-redux react-router-dom -S



```

## fetch
```
npm install es6-promise whatwg-fetch -D
```

## express
```
npm install express -S
```
## swipe
```
npm install swipe-js-iso react-swipe

```

##scripts
```
"start":"webpack-dev-server --port 5000 --open --progress --colors",
"build":"webpack -p"
```
### yarn
```
yarn add webpack webpack-dev-server

加 -dev 就是开发依赖
不加  就是项目依赖
```

### npm
```
-S:项目依拉
-D:开发依赖
```

## 目录结构
- components  组建 木偶组件，负责展示
- containers  页面组建，或者自己的subpage目录下
   - Home
     - subpage 智能组件，可以读取数据
     - index.js

- index.js 用来控制显示那一个页面

