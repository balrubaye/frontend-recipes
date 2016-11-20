const webpack= require('webpack');
const path= require('path');
const SRC_DIR= path.resolve(__dirname, 'public');
const DIST_DIR= path.resolve(__dirname, 'public/dist');

module.exports ={
	entry:{
		app: path.join(SRC_DIR, 'index.jsx'),
		vendor:['react','react-dom']
	},
	output:{
		path: DIST_DIR,
		filename: 'app.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?/,
				include: SRC_DIR,
				loader:'babel'
			}
		]
	},
	plugins:[
		 new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
	]
}