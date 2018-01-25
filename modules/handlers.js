exports.upload = function(request, response) {
    
    console.log('Rozpoczynam obsługę żądania upload');
    response.write("Rozpoczynam upload");
    response.end();
    
}

exports.welcome = function(request, response) {
    
    console.log('Rozpoczynam obsluge zadania welcome');
    response.write('Witamy na stronie startowej');
    response.end();
    
}

exports.error = function(request, response) {
    
    console.log('Nie wiem co robic');
    response.writeHead(404, "unwanted object");
    response.write('404 :(');
    response.end();
    
}