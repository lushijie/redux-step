/*
* @Author: lushijie
* @Date:   2016-09-24 11:27:51
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-24 11:39:10
*/

var glob = require('glob');
var path = require('path');


var entryList = glob.sync('examples/step*/index.html', {cwd: path.join(__dirname, '../..')});
var entryFilesObject = {};
entryList.forEach(function(v, index) {
    var tmp = v.split('/');
    entryFilesObject[tmp[1]] = v;
})
console.log(entryFilesObject);
