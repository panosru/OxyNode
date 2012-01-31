var http = require('http');

module.exports = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World of API!\n');
}).listen(3002);

console.log("API server listening on port %d in %s mode", app.address().port, app.settings.env);