const webpack = require('webpack');
const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(SRC_DIR, 'index.jsx'),
    vendor: ['react', 'react-dom', 'rxjs', 'd3']
  },
  output: {
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
  devtool: 'eval-source-map',
  devServer: {
    contentBase: DIST_DIR,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })

  ]
};
