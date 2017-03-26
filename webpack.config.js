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
	module: {
    loaders: [
      { test: /\.css$/, include: SRC_DIR, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, include: SRC_DIR, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
	plugins:[
		 //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
	]
}