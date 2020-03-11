const http = require('http');
const fs = require('fs');
const port = '3000';
const server = http.createServer((req,res)=>{
    const readstream = fs.createReadStream('./static/example.json');
    res.writeHead(200,{'Content-type':'application/json'});
    readstream.pipe(res);
});
server.listen(port);