const express = require('express');
const app = express();
const path = require('path');

app.use('/public',express.static(path.join(__dirname,'static'))); 
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
})
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery}});
});

app.listen('3000',()=>{console.log('server is running 3000')});