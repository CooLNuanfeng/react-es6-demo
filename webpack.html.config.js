var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 将css单独打包
module.exports = {
    entry : {
        'hello' : './test/hello.js',
        'test' : './test/test.js',
        'html' : './test/html.js'
    },
    output : {
        path : 'testdist/',
        filename : '[name].js'
    },
    module : {
        loaders : [
            {test:/\.js$/,exclude:/node_modules/,loader:'babel',query:{presets:['es2015','react']}},
            {test:/\.css$/,exclude:/node_modules/,loader:'style-loader!css-loader'},
            {test: /\.scss$/,exclude:/node_modules/,loader: ExtractTextPlugin.extract('style', 'css!sass')},
            {test:/\.jade$/,exclude:/node_modules/,loader:'jade'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'HtmlWebpackPlugin生成的html',
            filename : 'hello.html',
            chunks : ['hello'],
            hash : true,
            // minify: { removeTagWhitespace: false }
        }),
        new HtmlWebpackPlugin({
            title: 'jade 生成 html',
            template: 'templates/html.jade',
            filename : 'createfile.html',
            excludeChunks : ['hello']
        }),
        new ExtractTextPlugin("demo.css")
    ]
}

// 配置说明 ： http://hao.jser.com/archive/12620/
// minify配置 : https://github.com/kangax/html-minifier#options-quick-reference
