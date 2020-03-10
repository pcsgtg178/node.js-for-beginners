const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/form',(req,res)=>{
    console.log(req.body);
    res.json({success: true})
});

app.listen(3000);