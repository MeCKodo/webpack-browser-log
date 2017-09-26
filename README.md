## webpack-broswer-log
[![CircleCI](https://img.shields.io/circleci/project/github/MeCKodo/webpack-browser-log.svg)](https://circleci.com/gh/MeCKodo/webpack-browser-log) [![npm](https://img.shields.io/npm/v/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log) [![npm](https://img.shields.io/npm/dt/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log)

> Based on webpack-hot-middleware and webpack-dev-middleware friendly log errors on your browser.

> 中文文档在最下面

### Installing

> npm i webpack-browser-log --save-dev;

### Usage

First, add `webpack-hot-middleware/client` into the entry array.Such as
```javascript
entry: {
		index: ['webpack-hot-middleware/client?reload=true','./src/index.js'],
		vendor: ['vue', 'vue-router', 'vuex'],
	},
```

Next, add the following plugins to the plugins array:
```javascript
plugins : [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	//...
]
```

Now, edit your dev-client.js
```javascript
// build/dev-client.js

const WebpackBrowserLog = require('webpack-browser-log'); // use webpack-browser-log
const merge = require('webpack-merge'); // use webpack-merge
const webpackDev = require('./webpack.dev'); // webpack dev config
const base = require('./webpack.base'); // webpack base config
const webpackConfig = merge(base, webpackDev); // merge base and dev

new WebpackBrowserLog(webpackConfig); // magic
```

```bash
$ node build/dev-client.js
```

> Open your browser on http://localhost:3000. Let's coding

![gif](./webpack-browser-log.gif)

### Config

Because of based on [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware#usage) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware#config). You can read their doc directly.Enjoy yourself

```javascript
new webpackBrowserLog(webpackConfig, {
	port : 3000, // default
	errorsPluginOptions: { // default
    	// https://www.npmjs.com/package/friendly-errors-webpack-plugin#options
  	},
	devMiddleware : { // default
		publicPath: webpackConfig.output.publicPath,
		quiet: true
	},
	hotMiddleware : { // default
		log: () => {}
	},
	waitUntilValid : function () { }, // default
	setup(app, express) {
		// here you can get app express
		// example
        app.use('/static', express.static('./static'));
  	},
});
```

### Contributing

1.Fork it!

2.Create your feature branch: git checkout -b my-new-feature

3.Commit your changes: git commit -am 'Add some feature'

4.Push to the branch: git push origin my-new-feature

5.Submit a pull request :D

---

> 基于`webpack-hot-middleware`和`webpack-dev-middleware`，可以将你的错误友好的提示在浏览器上，无需切换命令行查看错误或者看浏览器的console面板

### 安装

> npm i webpack-browser-log --save-dev;

### 如何使用

首先, 把你的entry改成如下形式，每个页面入口都需要写成数组并且在最前面加`webpack-hot-middleware/client?reload=true`
```javascript
entry: {
		index: ['webpack-hot-middleware/client?reload=true','./src/index.js'],
		vendor: ['vue', 'vue-router', 'vuex'],
	},
```

接着, 在你的plugin里加入2个插件
```javascript
plugins : [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	//...
]
```

完了以后，新建一个`dev-client.js`，复制如下代码
```javascript
// build/dev-client.js

const WebpackBrowserLog = require('webpack-browser-log'); // 引入webpack-browser-log
const merge = require('webpack-merge'); // 引入webpack-merge
const webpackDev = require('./webpack.dev'); // 引入你webpack.dev的配置
const base = require('./webpack.base'); // 引入你webpack base的配置
const webpackConfig = merge(base,webpackDev); // 合并两配置

new WebpackBrowserLog(webpackConfig); // 默认只需要传入需要启动的webpack配置就OK了

```

最后，运行这个文件

```bash
$ node build/dev-client.js
```

> 打开你的浏览器，http://localhost:3000. 把你的代码故意改错试试，在浏览器上就会提示错误了

此处有gif，没看见等一会

![gif](./webpack-browser-log.gif)

### 配置选项

由于使用了[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware#usage) 和 [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware#config). 所以你可以直接阅读他们的文档，然后按照如下修改

```javascript
new webpackBrowserLog(webpackConfig, {
	port : 3000, // 修改启动端口，默认3000
	devMiddleware : { // 默认配置了publicPath和quiet，你可以覆盖它
		publicPath: webpackConfig.output.publicPath,
		quiet: true
	},
	hotMiddleware : { // 默认配置了log，你可以覆盖它
		log: () => {}
	},
	waitUntilValid : function () { } // 默认为空，这个是成功启动后的回调
	// 目前只有这4个字段是你可配置的，在下觉得已经足够了
	// new WebpackBrowserLog(webpackConfig); 最爽的就是直接这样
});
```