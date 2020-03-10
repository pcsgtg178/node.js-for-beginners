const fs = require('fs');

/*fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else{
        /*console.log('folder successfully created.\nand');
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else    
                console.log('Successfully delete the folder.');
 //1    });
        fs.writeFile('./tutorial/example.txt','Successfully created file to folder.',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Successfully created File.');
        });
    }
});*/
/*fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
        console.log(err);
    else{
        console.log('deleted file in folder.\nand');
        fs.rmdir('tutorial', (err)=>{
            if(err)
                console.log(err);
            else
                console.log('deleted folder.');
        });            
    }
});*/
fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/'+ file,(error)=>{
                if(error)
                    console.log(error);
                else{
                    console.log("Successfully delete files");
                }
            });
        }
    }     
});