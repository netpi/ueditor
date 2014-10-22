#Node.js : ueditor


[UEditor](https://github.com/fex-team/ueditor) 官方支持的版本有PHP JSP ASP .NET.

ueditor for nodejs 可以让你的UEditor支持nodejs

## ueditor@1.0.0 已经全面升级 。

##Installation

```
 npm install ueditor --save

```


##Usage

```javascript

var bodyParser = require('body-parser')
var ueditor = require("ueditor")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use("/ueditor", ueditor(path.join(__dirname, 'public'), function(req, res, next) {

  // ueditor 客户发起上传图片请求

  if(req.query.action === 'uploadimage'){
    var foo = req.ueditor;
    var img_url = 'yourpath'; // 填写你要把图片保存的路径 （ path.join(__dirname, 'public') 是根路径）
    res.ue_up(img_url); // 执行保存图片 并且返回给客户端信息
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage'){
    var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
    res.ue_list(dir_url)
  }
  // 客户端发起其它请求
  else {

    res.setHeader('Content-Type', 'application/json');
    // 这里填写 ueditor.config.json 这个文件的路径
    res.redirect('/ueditor/ueditor.config.json}
}));

```
##Example
```javascript

var bodyParser = require('body-parser')
var ueditor = require("ueditor")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

app.use("/ueditor", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
  // ueditor 客户发起上传图片请求
  if(req.query.action === 'uploadimage'){
    var foo = req.ueditor;
    var date = new Data();
    var imgname = req.ueditor.filename;

    var img_url = '/images/ueditor/'+date.getTime()+imgname;
    res.ue_up(img_url); // 执行保存图片 并且返回给客户端信息
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage'){
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url)
  }
  // 客户端发起其它请求
  else {
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/ueditor.config.json}
}));

```

你可以来[ueditor:nodejs](http://blog.netpi.me/nodejs/ueditor_nodejs)给作者留言

