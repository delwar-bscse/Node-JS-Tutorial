
const fs = require('fs');

// fs.rename('previousFileName','newFileName, (err)=>{})

fs.rename('Demo1.txt','Demo2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Successfully Renamed`);
    }
})