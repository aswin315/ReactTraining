module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': '"production'
    //         }
    //     })
    // ]
};