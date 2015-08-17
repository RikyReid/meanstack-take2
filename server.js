var express = require('express')
var bodyParser = require('body-parser')
//var Post = require('./models/posts')

var app = express()
app.use(bodyParser.json())
app.use('/api/posts', require('./controllers/api/posts'))
app.use(require('./controllers/static'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

//app.get('/', function (req, res) {
//    res.sendfile('layouts/posts.html')
//})

app.listen(3001, function () {
    console.log('Server listening on', 3001)
})