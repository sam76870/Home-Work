//3- node wcat.js -s filepath => convert big line breaks into a singular line break
let fs = require("fs");
let readLine = require("readline");
let input = process.argv.slice(2);
let path = input[0];

function wCat3(path){
      let data = readLine.createInterface({
         input: fs.createReadStream(path),
         output: process.stdout,
         terminal: false
   });
   let s = 0;
   data.on('line', (line) => { 
      if(line.length > 0){
            if(s > 0){
               console.log();
   }
               console.log(line);
               s=0;
   
      }
      else
      s++;
   }); 
}

module.exports = {
   wCatObj3: wCat3
}