/**
 * Created by Administrator on 2016/9/19 0019.
 */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./main.js',
    output:{
        path:'./dist',
        publicPath:'dist/',
        filename:'exam.build.js'
    },
    devServer: {
        stats: {
            children: false,
            chunks: false
        }
    },
    stats: {
        children: false,
        chunks: false
    },
    vue: {
        loaders: {
            js: 'babel',
            css: ExtractTextPlugin.extract('style', 'css'),
        }
    },
    babel: {
        presets: ['es2015'],
        /*plugins: [["component", [
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-default"
            }
        ]]]*/
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            { test: /\.html$/, loader: 'html' },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(jpg|png|ttf|svg|woff2|woff|eot)$/, loader: 'url?limit=20000&name=[path][name].[hash:6].[ext]' }
        ]
    },
    plugins : [
        new ExtractTextPlugin('[name].build.css'),
    ],
}