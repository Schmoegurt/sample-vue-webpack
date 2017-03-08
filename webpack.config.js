var path = require('path');
var webpack = require('webpack');

var API_URL;
if (process.env.NODE_ENV === 'development') {
	API_URL = JSON.stringify('http://localhost:5000/api');
} else if (process.env.NODE_ENV === 'production') {
	API_URL = JSON.stringify('http://production/api');
}

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'API_URL': API_URL
		})
	],
	devtool: '#eval-source-map'
}
