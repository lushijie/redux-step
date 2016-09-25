/*
* @Author: lushijie
* @Date:   2016-02-25 15:33:13
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-25 17:40:00
*/
var webpack = require('webpack');
var path = require('path');
var moment = require('moment');
var glob = require('glob');
var chalk = require('chalk');
var Pconf = require('./webpack.plugin.conf.js');

var NODE_ENV = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development'));
var bannerText = 'This file is modified by lushijie at ' + moment().format('YYYY-MM-DD h:mm:ss');

var entryFiles = {};
var step = JSON.parse(JSON.stringify(process.argv[2]) || 'step1');

console.log(chalk.blue(step));
glob.sync('examples/'+ step +'/index.jsx').forEach(function(v, index) {
    var tmp = v.split('/');
    entryFiles['index'] = v;
});
console.log(entryFiles);

module.exports = {
    //dev=cheap-module-eval-source-map
    //online=cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',

    context: __dirname,

    entry: entryFiles,

    output: {
        publicPath: '/dist/',
        path: 'dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loader: "style!css!postcss"
            },
            {
                test:/\.scss$/,
                loader: "style!css!postcss!sass"
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192&name=./img/[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                  path.join(__dirname, 'node_modules'),
                ],
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime', 'transform-decorators-legacy'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        Pconf.cleanPluginConf(['dist']),
        Pconf.bannerPluginConf(bannerText),
        //Pconf.definePluginConf(VAR_INJECT),
        Pconf.uglifyJsPluginConf(),
        //Pconf.extractTextPluginConf(),
        Pconf.commonsChunkPluginConf(),
        Pconf.minChunkSizePluginConf(),
        Pconf.hotModuleReplacementPluginConf(),
        // Pconf.transferWebpackPluginConf(),
        // Pconf.dedupePluginConf(),
        // Pconf.providePluginConf({$: 'jquery'}),
        //Pconf.htmlWebPackPluginConf(htmlPluginOptions)
    ],
    resolve:{
        root: [
            __dirname
        ],
        extensions: ['', '.js', '.jsx'],
        alias:{
            'actions': path.join('examples/', step, 'actions'),
            'components': path.join('examples/', step, 'components'),
            'reducers': path.join('examples/', step, 'reducers')
        }
    },
    devServer: {
        stats: {
            cached: false,
            colors: true
        },
        contentBase: __dirname,
        hot: true,
        inline: true,
        port: 5050,
        host: '0.0.0.0'
    },
    postcss: function () {
        return {
            plugins: [require('precss'), require('autoprefixer')]
        }
    }
};
