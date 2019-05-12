console.log("serverfile");
var connect = require('connect');

var http = require('http');
var app = connect();

/* This code block would run one after the other
function doFirst(request, response, next) {
    console.log("Bacon");
    next();
}


function doSecond(request, response, next) {
    console.log("Tuna");
    next();
}
app.use(doFirst);
app.use(doSecond);
*/


//This code block runs code when user goes to the appropriate page like  http://localhost:8888/profile
function profile(request, response){
    console.log("User requested profile")
}

function forum(request, response) {
    console.log("User requested forum")
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("server is now running");