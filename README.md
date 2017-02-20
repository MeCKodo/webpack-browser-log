## webpack-broswer-log
[![CircleCI](https://img.shields.io/circleci/project/github/MeCKodo/webpack-browser-log.svg)](https://circleci.com/gh/MeCKodo/webpack-browser-log) [![npm](https://img.shields.io/npm/v/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log) [![npm](https://img.shields.io/npm/dt/webpack-browser-log.svg)](https://www.npmjs.com/package/webpack-browser-log)

> Based on webpack-hot-middleware and webpack-dev-middleware friendly log errors on your browser

### Installing

> npm i webpack-browser-log --save-dev;

### Example

```javascript
// build/dev-client.js

const webpackBrowserLog = require('webpack-browser-log'); // use webpack-browser-log
const merge = require('webpack-merge'); // use webpack-merge
const webpackDev = require('./webpack.dev'); // webpack dev config
const base = require('./webpack.base'); // webpack base config
const webpackConfig = merge(base,webpackDev); // merge base and dev

const uri = 'http://localhost:' + 3000;

new webpackBrowserLog(webpackConfig, {
	port : 3001,
	devMiddleware : {
		publicPath: webpackConfig.output.publicPath,
		quiet: true
	},
	hotMiddleware : {
		log: () => {}
	},
	waitUntilValid : function () {
		console.log(`> Listening at ${uri}\n`)
	}
});

```

```bash
$ node build/dev-client.js
```

> Open your browser on http://localhost:3001. Let's coding

### Config

todo 0.0.6版本 设置默认参数


### Contributing

1.Fork it!

2.Create your feature branch: git checkout -b my-new-feature

3.Commit your changes: git commit -am 'Add some feature'

4.Push to the branch: git push origin my-new-feature

5.Submit a pull request :D



