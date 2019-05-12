console.log("serverfile");

var http = require('http');

//reuest is from them, response is what you send back
function onRequest(request, response){
    console.log("User made a request" + request.url);   //This will be called twice, second time is for favicon.ico, the icon when you create favorite
    //200 means ok, you've heard of 404 not found
    response.writeHead(200, { "Context-Type": "text/plain" });
    response.write("Here is some data");
    response.end();

}

http.createServer(onRequest).listen(8888);
console.log("server is now running");

