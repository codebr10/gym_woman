const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './app/_entry.js',
    devServer: {
        contentBase: './app',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/app/build'
    },
    watch: true,
    plugins: [
        new WebpackBar({
            color: '#ff6469'
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8000,
            files: ['./app/*.html'],
            server: { baseDir: ['app'] },
            //proxy: 'http://localhost:8000/'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                {
                    loader : 'postcss-loader',
                    options : {
                        plugins: [
                            autoprefixer('last 5 version')
                        ]
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|woff(2)?)$/,
            use: ['file-loader']
        }]
    }

}