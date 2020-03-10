const http = require('http');
const port = '3000';
const server = http.createServer((req,res) => {
    
    if(req.url === '/'){
        res.write('Hello world from Node.js');
        res.end();
    }
    else{
        res.write('use request some url');
        res.end();
    };
       
});

server.listen(port);

