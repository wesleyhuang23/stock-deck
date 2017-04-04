const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './public/src/app.js',
    ],
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!sass-loader",
                }),
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('./css/main.css')
    ]
}