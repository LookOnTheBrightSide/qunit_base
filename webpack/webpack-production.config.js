var WebpackStrip = require("strip-loader");
var developmentConfig = require("./webpack.config.js");

var stripLoader = {
	test: [/\.js$/,/\.es6$,\.futurejs$/],
	exclude: /node_modules/,
	loader: WebpackStrip.loader("console.log")
	// simple demo to remove all console.logs for production
}

developmentConfig.module.loaders.push(stripLoader);

module.exports = developmentConfig;