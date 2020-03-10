const fs = require('fs');

/*fs.writeFile('example.txt','This is an example create file.',(err)=>{
    if (err)
        console.log(err);
    else{
        console.log('File successfully created.');
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err)
                console.log(err);
            else    
                console.log(file);
        });
    }    
        
});*/

/*fs.rename('example.txt','reExample.txt',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('Successfully rename the file');
});*/

/*fs.appendFile('reExample.txt', ' Some data being append.',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('Successfully append data to file');
        fs.readFile('reExample.txt','utf8',(error,file)=>{
            if(error)
                console.log(error);
            else    
                console.log(file);
        });
});*/

fs.unlink('reExample.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully delete the file.');
});

