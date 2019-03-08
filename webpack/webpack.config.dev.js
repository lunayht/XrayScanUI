'use strict';

const path = require('path');
const webpack = require('webpack');

const CURRENT_WORKING_DIR = process.cwd();

const config = {
    context: path.basename(CURRENT_WORKING_DIR, 'client'),
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './main.js' // entry point of project
        ]
    },
    mode: 'development',
    module: {
        rules: [
            {
                // To transform all ES6 and JSX syntax
                test: /\.(js|jsx)$/, //checking all JS files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    cacheDirectory: true,
                    // for faster rebuilds
                    plugins: [
                        'react-hot-loader/babel', 
                        '@babel/plugin-proposal-function-bind',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        ]
    }, 
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'),
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR
        new webpack.NoEmitOnErrorsPlugin() // skip emitting phase when there're errors while compiling
    ]
};

module.exports = config;