// Naive packages.
var fs = require('fs');

// 3rd party packages.
var underscore = require("underscore");
var express = require("express");
var pug = require('pug');
var app = express();

// Set the HTML template.
app.set('view engine', 'pug');

// Path setting.
var viewsPath  = __dirname + '/views/';

// using static
app.use(express.static('public'));

// Server initialize.
app.get("/", function(req, res){
    var path = __dirname + '/public/image/';
    fs.readdir(path, function(err, files) {
        let imagePathList = files.map(file => {
            return ('/image/' + file);
        });

        let randomlyPickOne = underscore.first(underscore.shuffle(imagePathList));

        var data = {
            'coverImages': imagePathList,
            'coverImage': randomlyPickOne
        };
        res.render(viewsPath + 'index.pug', data);
    });

});

app.listen(3000, function(){
    console.log("伺服器已經啟動在 http://localhost:3000/");
});

// var http = require('http');
// var fs = require('fs');

// var hostname = '127.0.0.1';
// var port = 3000;

// fs.readFile('index.html', (err, html) =>{
// 	if(err){
// 		throw err;
// 	}

// 	const server = http.createServer((req, res) =>{
// 		res.statusCode = 200;
// 		res.setHeader('Content-type', 'text/html');
// 		res.write(html);
// 		res.end('Hello World!'); 
// 	});

// 	server.listen(port, hostname, () =>{
// 		console.log('Server started on port ' + port);
// 	})

// });
