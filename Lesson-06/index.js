const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req,res)=>{
    const handleFile = (statusCode, fileName) =>{
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url==='/'){
        handleFile(200, "./myViews/index.html");
    }
    else if(req.url==='/about'){
        handleFile(200, "./myViews/about.html");
    }
    else if(req.url==='/contact'){
        handleFile(200, "./myViews/contact.html");
    }
    else{
        handleFile(404, "./myViews/error.html");
    }
})

myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})