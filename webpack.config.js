const webpack = require('webpack');

module.exports = {
    entry: './src/itunes-api.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'itunes-helper.min.js',
        library: 'iTunesHelper',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    externals: {
        axios: {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty',
        process: false,
    }
};