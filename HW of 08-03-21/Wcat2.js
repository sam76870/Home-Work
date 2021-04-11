//2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
let fs = require("fs");
let input = process.argv.slice(2);
for(let i = 0 ; i < input.length ; i++){
    let path = input[i];
 
   let data = fs.readFileSync(path, 'utf8');
   console.log(data);
}