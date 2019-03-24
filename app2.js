// ** SWAPPING OUT SYNCHRONOUS METHOD IN LINE 10 **

var http = require('http'); 
var fs = require('fs');

http.createServer(function(req, res) { 

    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.createReadStream(__dirname + '/index.htm').pipe(res); // every chunk of data read from the file will be buffered and then piped out to the HTTP Response stream; instead of pulling our file into a buffer and then sending it synchronously, we send it a chunk at a time and keep the buffer small, making our app more responsive

}).listen(1337, '127.0.0.1')