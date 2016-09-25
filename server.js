/*
* @Author: lushijie
* @Date:   2016-09-23 17:23:16
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-25 15:27:35
*/

var express = require('express')
var path = require('path')

var app = express()
var port = 3000
var step = process.argv[2] || 'step1';

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
