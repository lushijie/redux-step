/*
 * @Author: lushijie
 * @Date:   2016-02-25 15:33:13
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-12-29 09:34:57
 */
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var chalk = require('chalk');
var setting = require('./webpack/webpack.config.setting.js');
var Pconf = require('./webpack/webpack.plugin.conf.js');

var step = 'step' + (process.env.npm_config_step || 1);
var entryFiles = {};
glob.sync('examples/' + step + '/index.jsx').forEach(function(v, index) {
  var tmp = v.split('/');
  entryFiles['index'] = v;
});

module.exports = {
  devtool: setting.isDev ? 'inline-source-map' : 'cheap-module-source-map',
  context: __dirname,
  entry: entryFiles,
  output: {
    publicPath: '/dist/',
    path: 'dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: setting.isDev ? "style!css?sourceMap!postcss?sourceMap" : "style!css!postcss"
    }, {
      test: /\.scss$/,
      loader: setting.isDev ? "style!css?sourceMap!postcss?sourceMap!sass?sourceMap" : "style!css!postcss!sass"
    }, {
      test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
      loader: 'url-loader?limit=8192&name=./assets/[name].[ext]'
    }, {
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
    }]
  },
  plugins: [
    setting.isDev ? Pconf.noopPluginConf() : Pconf.uglifyJsPluginConf(),
    Pconf.providePluginConf(setting.providePluginOptions),
    Pconf.commonsChunkPluginConf(),
  ],
  resolve: {
    root: [
      __dirname
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
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
    //hot: true,
    //inline: true,
    port: 5050,
    host: '0.0.0.0'
  },
  postcss: function() {
    return {
      plugins: [require('precss'), require('autoprefixer')]
    }
  }
};
