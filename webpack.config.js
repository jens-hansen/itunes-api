module.exports = {
    mode: 'production',
    entry: './src/itunes-api.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'itunes-helper.min.js',
        library: 'iTunesHelper',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    externals: {
        axios: {
            commonjs: 'axios',
            commonjs2: 'axios',
            amd: 'axios',
            root: 'axios',
        },
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty',
        process: false,
    },
}
