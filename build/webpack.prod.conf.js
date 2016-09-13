var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract("css")
    }
};

config.plugins = [
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
        name: 'js/vendors',
        filename: 'vendors.js'
    }),
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    //压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // 提取css为单文件
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        inject: true
    })
];

module.exports = config;