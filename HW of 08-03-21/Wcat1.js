//Q1- node wcat.js filepath => displays content of the file in the terminal 
let fs = require("fs");
let input = process.argv.slice(2);
let path = input[0];

function showData(path){
   if(input.length == 0){
      let data = fs.readFileSync(path, 'utf8');
      console.log(data);
   }
   else{
      for(let i = 0 ; i < input.length ; i++){
         let path = input[i];
      
        let data = fs.readFileSync(path, 'utf8');
        console.log(data);
     }
   }
}

module.exports = {
   wcat1 : showData
}

