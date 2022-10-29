const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req,res)=>{
    console.log(req.url);
    res.write("nodemon work perfectly.")
    res.end();
})

myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})