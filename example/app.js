var express = require('express');
var http = require('http');
var path = require('path');
var ueditor = require('ueditor');

var ejs = require('ejs');
var app = express();

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {

    res.render("index");
});

ueditor(app, '/ueditor/ueditor.config.json', '/', path.join(__dirname, 'public'), "/upload");
app.listen(3000, function() {

    console.log("Express server listening on port 3000");
});

module.exports = app;