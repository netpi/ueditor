#Node.js : ueditor



[UEditor](https://github.com/fex-team/ueditor) 官方支持的版本有PHP JSP ASP .NET.

ueditor for nodejs 可以让你的UEditor支持nodejs 


###ueditor@0.0.4以及更高版本,支持图片上传，图片批量管理等

##Installation

```
 npm install ueditor --save

```

##Usage

#### 使用时你需要
```javascript
var ueditor = require("ueditor")
/*
  ...

*/
ueditor(app, config_json_url, router_path, static_dir, visit_dir_path)

```
#### 参数配置


#####1 ``` app=express(); ```


#####2 config_json_url => 你的[config_json](https://github.com/netpi/ueditor-1/blob/dev-1.5.0/php/config.json) 文件的存放路径


#####3 router_path=>如果[ueditor.config.js](https://github.com/netpi/ueditor-1/blob/dev-1.5.0/ueditor.config.js)  的配置为:
```
  UEDITOR_HOME_URL: URL
``` 
. 那么，相应
```javascript
var router_path="/"

```
  
#####4 
```javascript 
var static_dir=path.join(__dirname, 'public')
```

#####5 visit_dir_path 您要保存图片的文件夹路径
##Example
```javascript
var ueditor=require('ueditor');

 /*
 ueditor(app, config_json_url, router_path, static_dir, visit_dir_path)
 
 
 1 app => var app = express();
 
 2 config_json_url => config.json  //you can find this in the UEditor demo
 
 3 router_path => you should edit 'ueditor.config.js' in the UEditor demo
 
  example : 
   open the file ueditor.config.js
   if  you edit => UEDITOR_HOME_URL: URL
   the router_path should be  "/"
 ----------------------------------------
 4 static_dir => path.join(__dirname, 'public')
 
 5 visit_dir_path => visit_dir_path is your img visit path 
 */

// like this
ueditor(app,"/ueditor/config.json","/",path.join(__dirname, 'public'),"/upload")

```
###浏览器端配置参考[UEditor](https://github.com/fex-team/ueditor)

作者博客 ：[Netpi 日志](http://blog.netpi.me)

公    司 ：[圆周率网络](http://i-pi.cc)
