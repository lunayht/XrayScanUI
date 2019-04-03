'use strict'; // cannot use undeclared variables 
const path = require('path');

/*
 * process.cwd() is used to determine the correct base directory.
 * Reference: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    context: path.resolve(CURRENT_WORKING_DIR, 'client'),
    entry: {
        app: [
            './main.js' //entry point of project
        ]
    },
    mode: 'production',
    module: {
        rules: [
            { //To transform all ES6 and JSX syntax
                test: /\.(js|jsx)$/, //checking all JS files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-function-bind',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'), 
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
};

module.exports = config;