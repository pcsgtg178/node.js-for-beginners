const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    req.banana = 'banana';
    next();
});

app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare');
});

app.listen(3000,()=>{console.log('server is running 3000')});