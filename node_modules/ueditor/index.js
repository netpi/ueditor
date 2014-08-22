var fse = require("fs-extra")
var fs = require('fs')
var ueditor = function(app, config_json_url, router_path, static_dir, visit_dir_path) {

    app.all("/ueditor" + router_path, function(req, res) {
        if (req.query.action == "uploadimage") {

            var title = req.body.pictitle;
            var img = req.files.upfile;
            var imgName = +new Date().getTime() + img.name;

            var dir_save_path = static_dir + visit_dir_path;
            var img_save_path = static_dir + visit_dir_path + "/" + imgName;
            var img_visit_path = visit_dir_path + "/" + imgName;

            fse.move(img.path, img_save_path, function(err) {
                if (err) throw err;
                res.json({
                    'url': img_visit_path,
                    'title': title,
                    'original': img.name,
                    'state': 'SUCCESS'
                });
            });
        } else if (req.query.action == "listimage") {
            var str = '';
            var i = 0;
            var list = [];
            fs.readdir(static_dir + visit_dir_path, function(err, files) {
                if (err) throw err;


                var total = files.length;

                files.forEach(function(file) {
                    var temp = {};
                    temp.url = visit_dir_path + "/" + file;
                    list[i] = (temp)
                    i++;

                    // send file name string when all files was processed
                    if (i === total) {

                        res.json({
                            "state": "SUCCESS",
                            "list": list,
                            "start": 1,
                            "total": total
                        })
                    }
                });
            });
        } else {
            res.redirect(config_json_url);
        }

    });
}
module.exports = ueditor;