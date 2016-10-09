/*
* @Author: lushijie
* @Date:   2016-02-25 15:33:13
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-09 15:46:18
*/
var webpack = require('webpack');
var path = require('path');
var moment = require('moment');
var glob = require('glob');
var chalk = require('chalk');
var Pconf = require('./webpack.plugin.conf.js');

var NODE_ENV = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development'));
var bannerOptions = 'This file is modified by lushijie at ' + moment().format('YYYY-MM-DD h:mm:ss');
var DEFINE_INJECT = {
    ENV:{
        'a': JSON.stringify('development variable'),
        //替换规则是 API_URL = 后面的值，所以要添加 JSON.stringify
        'API_URL': JSON.stringify('http://localhost/url'),
        //Please keep process.env
        'process.env': {
            //Note: by default, React will be in development mode, which is slower, and not advised for production.
            NODE_ENV: JSON.stringify('development')
        }
    },
    PUB:{
        'a': 123123,
        'API_URL': JSON.stringify('http://online/url'),
        //Please keep process.env
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }
};
var definePluginOptions = {DEFINE_INJECT: DEFINE_INJECT[NODE_ENV == 'development' ? 'ENV':'PUB']};


var step = 'step' + (process.env.npm_config_step || 1);
var entryFiles = {};
glob.sync('examples/'+ step +'/index.jsx').forEach(function(v, index) {
    var tmp = v.split('/');
    entryFiles['index'] = v;
});

module.exports = {
    //dev=cheap-module-eval-source-map
    //online=cheap-module-source-map
    devtool: (NODE_ENV == 'development') ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',

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
                loader: 'url-loader?limit=8192&name=./assets/[name].[ext]'
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
        Pconf.bannerPluginConf(bannerOptions),
        Pconf.definePluginConf(definePluginOptions),
        Pconf.uglifyJsPluginConf(),
        Pconf.commonsChunkPluginConf(),
        Pconf.minChunkSizePluginConf(),
        Pconf.hotModuleReplacementPluginConf(),
        //Pconf.extractTextPluginConf(),
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
            'reducers': path.join('examples/', step, 'reducers'),
            'containers': path.join('examples/', step, 'containers')
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
