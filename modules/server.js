var http = require('http');
var Color = require('colors');

var handlers = require('./handlers');

function start() {
    
    function onRequest(request, response) {
        
        console.log('Obebrano zapytanie'.blue);
        console.log('Zapytanie ' + request.url + " odebrane");
        
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
        
        switch(request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            default:
                handlers.error(request, response);
        }
        
    }
    
    http.createServer(onRequest).listen(9000, function() {
        console.log('Serwer uruchomiony!'.green);
    })
    
}

module.exports = {
    start: start
}