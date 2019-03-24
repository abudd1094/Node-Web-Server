var http = require('http'); // grabs the http module from the core
var fs = require('fs'); // use the file module in Node to output the contents of the index.htm file to the http response

http.createServer(function(req, res) { // creates a new server object that takes an event emitter callback

    res.writeHead(200, { 'Content-Type': 'text/html' }) // http with status code 200 and MIME type html for line 9 html file or 'text/plain' for line 8 plain string output

    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8'); // synchronous call to provide full path to the htm file and store contents in the html variable;  adding the 'uft8' character encoding allows node to decode and return a string instead of a buffer

    var message = 'Hello world...';

    html = html.replace('{Message}', message); // hook up the {Message} template in our HTML (index.htm) file to display the contents of the message JS variable in this file

    // res.end('Hello world\n');  // send this string data as the response; backslash n is just a way to skip a line and a good way to end our data

    res.end(html); // send contents of html variable as the response


}).listen(1337, '127.0.0.1') // listen on port 1337 for the local host (IP address 127.0.0.1)