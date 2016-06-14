var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var exif = require('exiftool');
var fs = require('fs');
var data;

fs.readFile('./ct_bg.png', function(err, data) {
    if (err)
        throw err;
    else {
        exif.metadata(data, function(err, metadata) {
            if (err)
                throw err;
            else
                // data = metadata;
                var destination = "data.json";
                fs.writeFile(destination, metadata, function(err) {
                    if (err) throw err;
                    console.log(metadata, "file written");
                });
            // console.log(data);
        });
    }
});

// fs.appendFile(destination, data, function(err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("______**ALL OK**_______");
// });



app.get('/', function(req, res) {
    res.sendFile("data.json");
})

app.listen(3003, function() {
    console.log('Example app listening on port  http://localhost:3003/');
});