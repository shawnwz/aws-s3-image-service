const { getOriginalImage, getImageWithSize } = require("./image");
const { response } = require("express");

module.exports = {
    getImage(req, res) {
        let objectKey = req.params.key;
        let width = req.query.width;
        let height = req.query.height || 200;
        console.log('INFO: getting image, key is ' + objectKey);
        if (width) {
            getImageWithSize("image2020-wzhe", objectKey, width, height).then(function(data){
                var img = Buffer.from(data.body, 'base64');
                var headers = data.headers;
                res.header(headers);
                res.end(img);
            });
        } else {
            getOriginalImage("image2020-wzhe", objectKey).then(function(data){
                var img = Buffer.from(data.body, 'base64');
                var headers = data.headers;
                res.header(headers);
                res.end(img);
            });
        }
        
    }
}