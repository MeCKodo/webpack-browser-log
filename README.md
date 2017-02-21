## webpack-broswer-log
[![CircleCI](https://img.shields.io/circleci/project/github/MeCKodo/webpack-browser-log.svg)](https://circleci.com/gh/MeCKodo/webpack-browser-log) [![npm](https://img.shields.io/npm/v/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log) [![npm](https://img.shields.io/npm/dt/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log)

> Based on webpack-hot-middleware and webpack-dev-middleware friendly log errors on your browser.

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

const webpackBrowserLog = require('webpack-browser-log'); // use webpack-browser-log
const merge = require('webpack-merge'); // use webpack-merge
const webpackDev = require('./webpack.dev'); // webpack dev config
const base = require('./webpack.base'); // webpack base config
const webpackConfig = merge(base,webpackDev); // merge base and dev

new webpackBrowserLog(webpackConfig); // magic

```

```bash
$ node build/dev-client.js
```

> Open your browser on http://localhost:3000. Let's coding

### Config

Because of based on [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware#usage) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware#config). You can read their doc directly.Enjoy yourself

```javascript
new webpackBrowserLog(webpackConfig, {
	port : 3000, // default
	devMiddleware : { // default
		publicPath: webpackConfig.output.publicPath,
		quiet: true
	},
	hotMiddleware : { // default
		log: () => {}
	},
	waitUntilValid : function () { } // default
});

```

### Contributing

1.Fork it!

2.Create your feature branch: git checkout -b my-new-feature

3.Commit your changes: git commit -am 'Add some feature'

4.Push to the branch: git push origin my-new-feature

5.Submit a pull request :D