
const fs = require('fs');

// fs.writeFile('fileName',"fileContent", anonymousFucntion)

fs.appendFile('Demo1.txt',"Append file don't overwrite previous text", (err)=>{
    if(err){
        console.log("Failed")
    }else{
        console.log("Successfully write file")
    }
})