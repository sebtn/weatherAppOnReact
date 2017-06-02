let path = require('path')
let webpack = require('webpack')

module.exports = {
	entry: {
		path: ['./app/app.js']
	},
	output: {
		path: path.resolve( __dirname, 'public'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			Main: 'app/components/Main.js',
			Nav: 'app/components/Nav.js',
			Weather: 'app/components/Weather.js',
			WeatherForm: 'app/components/WeatherForm.js',
			WeatherMessage: 'app/components/WeatherMessage.js',
			About: 'app/components/About.js',
			Examples: 'app/components/Examples.js',
			OpenWeatherMap: 'app/api/OpenWeatherMap.js',
		}
	},
	module: {
		loaders: [
			{
				test: /\.js|.jsx?$/,
				exclude:/node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["babel-preset-es2015", "react", "babel-preset-stage-0" ]
				}
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}