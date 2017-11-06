module.exports = {
    entry: './src/itunes-api.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'itunes-api.js',
        library: 'iTunesApi',
        libraryTarget: "umd",
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
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty',
        process: false,
    }
};