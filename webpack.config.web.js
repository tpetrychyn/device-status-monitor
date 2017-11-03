const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const webpackConfig = merge.smart(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"web"'
            }
        })
    ]
});

module.exports = webpackConfig;