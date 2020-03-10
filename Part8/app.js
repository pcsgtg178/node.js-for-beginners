const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello Express');
});

app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.params.name);
    console.log(req.query);
    //res.send('example with route params');
    res.send(req.params.name+':'+req.params.age);
    //res.send('example with route params '+JSON.stringify(req.params));
    //res.send('example with route params '+req.params.name+' age '+req.params.age);
});

app.listen(port);