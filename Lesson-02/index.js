
const fs = require('fs');

// fs.writeFile('fileName',"fileContent", anonymousFucntion)

fs.writeFile('Demo1.txt',"Text go inside the file", (err)=>{
    if(err){
        console.log("Failed")
    }else{
        console.log("Successfully write file")
    }
})