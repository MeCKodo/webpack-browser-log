var express = require('express');
var webpack = require('webpack');

var app = express();

function WebpackBrowserLog(webpackConfig, options) {
	this.init(webpackConfig, options);
}

WebpackBrowserLog.prototype = {
	constructor: WebpackBrowserLog,
	init: function init(webpackConfig, options) {
		var compiler = webpack(webpackConfig);
		var devMiddleware = this.devMiddleware(compiler, options.devMiddleware);
		
		var hotMiddleware = this.hotMiddleware(compiler, options.hotMiddleware);
		app.use(devMiddleware);
		
		app.use(hotMiddleware);
		
		devMiddleware.waitUntilValid(options.waitUntilValid || function waitUntiValid() {});
		
		app.listen(options.port || 3000, function error(err) {
			if (err) {
				console.log(err);
			}
		});
	},
	devMiddleware: function devMiddleware(compiler, devOptions) {
		return require('webpack-dev-middleware')(compiler, devOptions);
	},
	hotMiddleware: function hotMiddleware(compiler, hotOptions) {
		return require('webpack-hot-middleware')(compiler, hotOptions);
	},
};

module.exports = WebpackBrowserLog;
