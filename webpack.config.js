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
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty',
        child_process: 'empty',
        process: false,
    }
};