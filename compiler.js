var pug = require('pug');
var fs = require('fs');

var html = pug.compileFile(__dirname + '/views/index.pug')();

fs.writeFile(__dirname + '/public/index.html', html, function(err){
    if(err){
        console.log(err);
    }
    console.log('file has been saved!');
});