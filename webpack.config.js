const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[contenthash].js',
		publicPath: '',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html'
		})
	],
	resolve: { extensions: ['.jsx', '.js', '.tsx', '.ts'] },
};
