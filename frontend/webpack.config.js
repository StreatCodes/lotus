const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, "dist/"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {'targets': {"node": "current"}}]
                    ],
                    plugins: [
                        ['transform-react-jsx', { "pragma": "h" }],
                        ['transform-class-properties']
                    ]
                }
            }
        }]
    },
    devtool: 'source-map'
}