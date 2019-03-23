var http = require('http'); // grabs the http module from the core

http.createServer(function(req, res) { // creates a new server object that takes an event emitter callback

    res.writeHead(200, { 'Content-Type': 'text/plain' }) // http with status code 200 and MIME type plain text
    res.end('Hello world\n');  // backslash n is just a way to skip a line and a good way to end our data

}).listen(1337, '127.0.0.1') // listen on port 1337 for the local host (IP address 127.0.0.1)