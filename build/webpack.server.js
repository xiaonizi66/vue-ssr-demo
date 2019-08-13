const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const resolve = dir => {
    return path.resolve(__dirname, dir)
}
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
    entry: {
        server: resolve('../src/server-entry.js')
    },
    target: 'node', // 用给node来使用
    // devtool: 'source-map',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.ssr.html',
            template: resolve('../public/index.ssr.html'),
            excludeChunks: ['server'] // 排查某个模块
        }),

    ]
})