var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

module.exports = {
	entry: {
		keyboard: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'Keyboard',
		libraryTarget: 'umd',
		publicPath: '/assets/',
		filename: '[name].js'
	},
	devtool: '#eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!scss-loader'
			},
			{
				test: /\.handlebars$/,
				loader: "handlebars-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js'],
		fallback: [path.join(__dirname, '../node_modules')]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},

};