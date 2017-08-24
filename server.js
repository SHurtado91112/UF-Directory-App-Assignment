var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
  var path = parsedUrl.pathname;
  if(path == '/listings') {
    const body = listingData;
    console.log('Here');
    response.writeHead(200, 'success', {'Content-Type' : 'text/plain'});
    response.write(body);
    response.end();
  }
  else {
    console.log('Bad Access');
    const body = 'Bad Gateway Error';
    response.writeHead(404, 'Page Not Found', {'Content-Type' : 'error'});
    response.write(body);
    response.end(); 
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
  
  if(err) { 
    throw err;
  }

  listingData = data;
  // the server is now started, listening for requests on port 8080
  server.listen(port, function() {
    //once the server is listening, this callback function is executed
    console.log('Server listening on: localhost:' + port);
  });
});

// a server is created, but not started
var server = http.createServer(requestHandler);

console.log("Loading JSON data...");
