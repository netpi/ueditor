#Node.js : ueditor


[UEditor](https://github.com/fex-team/ueditor) 官方支持的版本有PHP JSP ASP .NET.

ueditor for nodejs 可以让你的UEditor支持nodejs 



##Installation

```
 npm install ueditor

```

##Usage
```javascript
var ueditor=require('ueditor');
/*
ueditor(app, config_json_url, router_path, static_dir, visit_dir_path)


1,app => var app = express();

2,config_json_url => config.json  //you can find this in the UEditor demo

3,router_path => you should edit 'ueditor.config.js' in the UEditor demo

 example : 
  open the file ueditor.config.js
  if  you edit => UEDITOR_HOME_URL: URL
  the router_path should be  "/"
----------------------------------------
4,static_dir => path.join(__dirname, 'public')

5,visit_dir_path => visit_dir_path is your img visit path 
*/

// like this
ueditor(app,"/ueditor/config.json","/",path.join(__dirname, 'public'),"/upload")

```
>email : netpi@foxmail.com
