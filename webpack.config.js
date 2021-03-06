const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		index: ['./src/index.js'],
		components: ['./src/components.js'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/docs',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
            hotReload: true,
            customElement: true
					}
				}
			},
			{
				test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
			},
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
};
