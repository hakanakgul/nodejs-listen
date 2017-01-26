var http = require('http');
var host = '192.168.1.100';
var port = '80';
var server = http.createServer(function(request, response) {
    console.log(zaman() + "gelen istek : " + request.url);
    response.writeHead(200, { 'Content-type': 'text plain' });
    response.end("merhaba dünya");
});

server.listen(port, host, function() {
    console.log(zaman() + ' : Dinlenen  : ' + host + ':' + port);

});

function zaman() {

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    return datetime;
}