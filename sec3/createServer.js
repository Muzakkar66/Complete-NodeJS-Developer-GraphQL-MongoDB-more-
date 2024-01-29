const http = require('http');

http.createServer(function (req, res){
    res.end("Hello,cccc world!");
}).listen(3000);

