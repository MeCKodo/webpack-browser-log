const express = require('express');
const app = new express();
const webpack = require('webpack');

function WebpackBrowserLog(webpackConfig, options) {
	this.init(webpackConfig,options)
}

WebpackBrowserLog.prototype = {
	constructor: WebpackBrowserLog,
	init : function (webpackConfig, options) {
		
		var compiler = webpack(webpackConfig);
		var devMiddleware = this.devMiddleware(compiler, options.devMiddleware)
		
		var hotMiddleware = this.hotMiddleware(compiler, options.hotMiddleware)
		app.use(devMiddleware);

		app.use(hotMiddleware);
		
		devMiddleware.waitUntilValid(options.waitUntilValid || function() {});
		
		app.listen(options.port || 3000, function (err) {
			if (err) return console.log(err)
			
		});
	},
	devMiddleware: function (compiler, devOptions) {
		return require('webpack-dev-middleware')(compiler, devOptions);
	},
	hotMiddleware: function (compiler, hotOptions) {
		return require('webpack-hot-middleware')(compiler, hotOptions);
	}
};

module.exports = WebpackBrowserLog;
