"use strict"


 const http=require('http');
 const fs = require('fs');
 const path = require('path');
 const server= http.createServer(function(req, res){
      if(req.url=="/"){
        fs.readFile('index.html', function(error,data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }); 
    } else{
        fs.readFile('index.html',function(error,data){
            res.writeHead(404,{'content-type':'text/html'});
            res.write('404 Not Found');
            res.end();
        }); 
    }
});
server.listen(3000);
console.log('Server listening on port 3000')




