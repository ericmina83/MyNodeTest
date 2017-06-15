var express = require("express");
var pug = require('pug');
var app = express();

// Path setting.
var viewsPath  = __dirname + '/views/';

// using static
app.use(express.static('public'));

// Server initialize.
app.get("/", function(req, res){
    var options = {};
    var html = pug.compileFile(viewsPath + 'index.pug', options);
    res.send(html());
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
