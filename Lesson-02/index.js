
const fs = require('fs');

// fs.exists('fileName', (res)=>{})

fs.exists('Demo2.txt', (res)=>{
    if(res){
        console.log(`File found`);
    }else{
        console.log(`Not found`);
    }
})