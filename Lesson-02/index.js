
const fs = require('fs');

// fs.rename('fileName', (err)=>{})

fs.unlink('Demo2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Successfully Deleted`);
    }
})