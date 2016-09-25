/*
* @Author: lushijie
* @Date:   2016-09-23 17:23:16
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-23 17:38:03
*/

var express = require('express')
var path = require('path')

var app = express()
var port = 5050

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get("/", function(req, res) {
  res.sendFile( path.join(__dirname, 'examples/', process.argv[2], 'index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
