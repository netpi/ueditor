var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();

var ueditor = require("ueditor");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// view engine setup


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    //客户端上传文件设置
    var file_url = '';//上传地址
    //图片上传
    if (req.query.action === 'uploadimage') {
        file_url = '/img/ueditor/';
        res.ue_up(file_url);
        res.setHeader('Content-Type', 'text/html');
    }
    //附件上传
    if (req.query.action === 'uploadfile') {
        file_url = '/file/ueditor/';
        res.ue_up(file_url);
        res.setHeader('Content-Type', 'text/html');
    }
    //视频上传
    if (req.query.action === 'uploadvideo') {
        file_url = '/video/ueditor/';
        res.ue_up(file_url);
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/images/ueditor/';
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        // console.log('config.json')
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));




app.use('/', function (req, res) {
    res.render('ueditor');
});

app.listen(3000, function () {
    console.log('app listen : 3000');
});

module.exports = app;
