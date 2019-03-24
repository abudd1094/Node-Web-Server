// ** BUILDING A VERY SIMPLE API **

var http = require('http'); 
var fs = require('fs');

http.createServer(function(req, res) { 

    res.writeHead(200, { 'Content-Type': 'application/json' }); // MIME type is 'application/json' to read JSON data

    var obj = { // object that stores the relevant data
      firstname: 'John',
      lastname: 'Doe'
    };

    res.end(JSON.stringify(obj));  // deliver the contents of our data object to the response stream as JSON

}).listen(1337, '127.0.0.1')