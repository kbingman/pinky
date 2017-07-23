const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index',
    output: {
        path: path.join(__dirname),
        filename: 'pinky.js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
