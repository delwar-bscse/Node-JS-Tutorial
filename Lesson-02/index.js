
const fs = require('fs');

// fs.readFile('fileName','encodingSystem, (err, data)=>{})

fs.readFile('Demo1.txt','utf-8', (err,data)=>{
    if(err){
        console.log("Failed to Read File");
    }else{
        console.log(`\n${data}\n`);
    }
})