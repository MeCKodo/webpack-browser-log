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
		
		app.use(this.devMiddleware(compiler, options.devMiddleware));

		app.use(this.hotMiddleware(compiler, options.hotMiddleware));
		
		app.listen(3000, function (err) {
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
