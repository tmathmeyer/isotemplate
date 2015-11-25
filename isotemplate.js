var mark = require('markup-js');
exports.engine = function(iso) {
    fs = require('fs');
    iso.template = function(res, file, context) {
        fs.readFile(process.cwd() + "/" + file, "utf8", function (err, template) {
            result = mark.up(template, context);
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(result);
        });
    }
};
