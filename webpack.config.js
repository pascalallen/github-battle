var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // creates index.html file in dist dir and includes index_bundle.js

module.exports = { // export webpack object
	entry: './app/index.js', // takes in original js file
	output: {
		path: path.resolve(__dirname, 'dist'), // root dir
		filename: 'index_bundles.js' // new webpack js file
	},
	module: { // specifies code to transform
		rules: [ // loaders of the transformations we want to make
			{test: /\.(js)$/, use: 'babel-loader'}, // used on any file that has a .js extension. if file has .js extension then it gets ran through this loader
			{test: /\.css$/, use: ['style-loader', 'css-loader']} // used on any file that has a .css extension. if file has .css extension then it gets ran through this loader
		]
	},
	plugins: [new HtmlWebpackPlugin({ // pass in template
		template: 'app/index.html'
	})]
}
