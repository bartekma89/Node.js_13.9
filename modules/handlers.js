var fs = require('fs');
var Formidable = require('formidable');

exports.upload = function(request, response) {
    
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new Formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, 'test.png');
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('Received image: <br/>');
        response.write('<img src="/show" />');
        response.end();
    })
    
}

exports.welcome = function(request, response) {
    
    console.log('Rozpoczynam obsluge zadania welcome');
    var file = fs.createReadStream('./templates/start.html');
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    file.pipe(response);
    
}

exports.error = function(request, response) {
    
    console.log('Nie wiem co robic');
    response.writeHead(404, "unwanted object");
    response.write('404 :(');
    response.end();
    
}

exports.show = function(require, response) {
    
    var file = fs.createReadStream('./test.png');
    response.writeHead(200, {"Content-Type": "image/png"});
    file.pipe(response);
    
}