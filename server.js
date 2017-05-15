var http = require('http');
var host = '192.168.1.100';
var port = '80';
var server = http.createServer(function(request, response) {
    console.log("gelen istek : " + request.url);
    response.writeHead(200, { 'Content-type': 'text plain' });
    response.end("merhaba dünya");
});

server.listen(port, host, function() {
    console.log('Dinlenen  : ' + host + ':' + port);

});