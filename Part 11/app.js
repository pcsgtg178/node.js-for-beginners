const express = require('express');
const path = require('path');
const Joi = require('joi');
const app = express();
const bodyParser = require('body-parser');

const arrayString = ['banana','bacon','cheese'];
const arrayObject = [{example:'example1'},{example:'example2'},{example:'example3'}]
const userInput = { personalInfo : {
                        nAdress : '73/3',
                        nVillage : 'BanBoBia',
                        nDistrict : 'BanKhok',
                        nProvince : 'Uttaradit'
                    },
                    preferences : arrayObject};
const personalInfoSchema = Joi.object().keys({
    nAdress : Joi.string().trim().required(),
    nVillage : Joi.string().trim().required(),
    nDistrict : Joi.string().trim().required(),
    nProvince : Joi.string().trim().required(),
});

//const preferencesSchema = Joi.array().items(Joi.string());
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example : Joi.string().trim().required()
}));

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err);
    else    
        console.log(result);
});
/*app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/form',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    })
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send('an error has occurred');
        }
        console.log(result);
        res.send('successfully posted data');  
    });
});

app.listen(3000,()=>{console.log('Server is running port 3000')});*/