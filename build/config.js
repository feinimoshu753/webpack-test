const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
    ]
}

module.exports = config