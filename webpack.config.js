const path = require('path');
const webpack = require('webpack');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [ './src/index' ],
  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'pinky.js',
    library: 'Pinky',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        },
        include: path.resolve('..', __dirname)
      }
    ]
  },
  presets: [
    'es2015'
  ]
};
