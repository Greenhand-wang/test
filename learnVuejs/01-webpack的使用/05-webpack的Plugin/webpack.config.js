const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
	entry: './src/main',
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath:'dist/'
	},

module:{
	rules:[
		{
			test:/\.css$/,
			use:['style-loader','css-loader']
		}
	]
		},
resolve: {
	alias:{
		'vue$': 'vue/dist/vue.esm.js'
	}
},
plugins:[
	new HtmlWebpackPlugin({
		template:'index.html'
	})
]
}
		