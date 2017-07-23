const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './examples/src/index',
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'pinky.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
