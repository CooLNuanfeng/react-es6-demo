var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    entry : [
        './test/test.js'
    ],
    output : {
        path : 'testdist/',
        filename : 'test.js'
    },
    module : {
        loaders : [
            {test:/\.js$/,exclude:/node_modules/,loader:'babel',query:{presets:['es2015','react']}},
            {test:/\.css$/,exclude:/node_modules/,loader:'style-loader!css-loader'}
        ]
    },
    plugins: [
        new uglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ]
}
