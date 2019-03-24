// ** BUILDING AN API w Routing **

var http = require('http'); 
var fs = require('fs');

http.createServer(function(req, res) { 

  if(req.url === '/') { // basic route, if the url is '/' return this data to the response stream
    fs.createReadStream(__dirname + '/index.htm').pipe(res); // data from a file
  }

  else if(req.url === '/api') { // a second route to store alternative data 
    res.writeHead(200, { 'Content-Type': 'application/json' }); // MIME type is 'application/json' to read JSON data
    var obj = { // object that stores the relevant data
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));  // deliver the contents of our data object to the response stream as JSON
  }

  else {
    res.writeHead(404); // return standard HTTP 404 error if node can't find the route
    res.end();
  }

}).listen(1337, '127.0.0.1')