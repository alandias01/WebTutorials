console.log("serverfile");

var http = require('http');
var fs = require('fs');


function send404Response(response) {
    response.writeHead(404, { "Context-Type": "text/plain" });
    response.write("Error 404: Page not found");
    response.end();
}

//reuest is from them, response is what you send back
function onRequest(request, response){
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./index.html").pipe(response);
    } else {

        send404Response(response);
    }
    
       

}

http.createServer(onRequest).listen(8888);
console.log("server is now running");

