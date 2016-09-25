/*
* @Author: lushijie
* @Date:   2016-09-23 17:23:16
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-25 18:54:03
*/
// 由于entryfiles没有根据publish调整所以暂时不再使用express
// ###express运行
// npm run publish
// 启动express：node server.js [step1, step2, ...]
// 浏览器访问：http://127.0.0.1:3000
var express = require('express')
var path = require('path')

var app = express()
var port = 3000
console.log(process.argv);
var step = JSON.parse(JSON.stringify(process.argv[2]) || 'step1');

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get("/", function(req, res) {
  res.sendFile( path.join(__dirname, 'examples/', step, 'index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
