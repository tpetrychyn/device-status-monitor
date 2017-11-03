const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const webpackConfig = merge.smart(baseConfig, {
    // output: {
    //     path: __dirname + '/dist',
    //     publicPath: path.join(__dirname, 'public'),
    //     filename: '[name]-bundle.js'
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"electron"'
            }
        })
    ],
    target: 'electron'
});

module.exports = webpackConfig;