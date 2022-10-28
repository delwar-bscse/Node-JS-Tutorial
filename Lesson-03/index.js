const path = require('path');

const ex = path.extname("index.html");
console.log(`\nExtention : ${ex}`);


const jn = path.join(__dirname+"/index.js");
console.log(`Join : ${jn}\n`);