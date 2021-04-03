const path=require('path')
module.exports={
	entry: './src/main',
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js'
	},

}