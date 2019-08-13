// 基础的webpack配置
// webpack专用配置
const path = require('path')
const VueLoader = require('vue-loader/lib/plugin')
const resolve = dir => {
    return path.resolve(__dirname, dir)
}
module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: resolve('../dist')
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.less$/,
                loader: 'vue-style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 300000,
                        name: '[name].[ext]?[hash]'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoader()
    ]
}