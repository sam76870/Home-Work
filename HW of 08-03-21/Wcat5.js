//5- node wcat -b filepath => give numbering to non-empty lines
let fs = require("fs");
let readLine = require("readline");
let input = process.argv.slice(2);
let path = input[0];
function wCat5(path){
    let data = readLine.createInterface({
       input: fs.createReadStream(path),
       output: process.stdout,
       terminal: false
   });
 let i = 1 , s = 0;
   data.on('line', (line) => { 
       
      if(line.length > 0){
          if(s > 0){
             console.log();
 }
             console.log(i++,"",line);
             s=0;
   
      }
      else
      s++;
     });
}

    module.exports = {
        wCatObj5 : wCat5
    }