const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "../dist")
    },
    mode: 'development',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.json/,
                exclude: /node_modules/,
                loader: require.resolve('../loaders/json-loader.js')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
    ]
}

module.exports = config