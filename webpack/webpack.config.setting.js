/*
 * @Author: lushijie
 * @Date:   2016-11-11 17:20:12
 * @Last Modified by:   lushijie
 * @Last Modified time: 2016-11-15 10:00:34
 */

var isDev = JSON.parse(JSON.stringify(process.env.NODE_ENV || 'development')) == 'development';

var providePluginOptions = {
  autobind: 'autobind-decorator'
}

module.exports = {
  isDev: isDev,
  providePluginOptions: providePluginOptions
};
