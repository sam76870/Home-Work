let displayContent = require("./HW of 08-03-21/Wcat1");
let BrkSpcs = require("./HW of 08-03-21/Wcat3");
let GiveNoOfLine = require("./HW of 08-03-21/Wcat4");
let GiveNoOfNonEmpLine = require("./HW of 08-03-21/Wcat5");
let input = process.argv.slice(2);
let cmd = input[0];
if(cmd == '-s' || cmd == '-n' || cmd == '-b'){
        let dirpath = input[1];
        if(input.length <= 2)
        {
            switch(cmd){
                case "-s":
                    BrkSpcs.wCatObj3(dirpath);
                    break;
                case "-n":
                    GiveNoOfLine.wCatObj4(dirpath);
                    break;
                case "-b":
                    GiveNoOfNonEmpLine.wCatObj5(dirpath);
                    break;
                default:
                    console.log(`Wrong command 
                    :( File does not exist`);
            }
        }else {

            if(input.length == 3 && input[0] == '-s' && input[1] == '-n'){
                let path = input[2];
                BrkSpcs.wCatObj3(dirpath);
                GiveNoOfLine.wCatObj4(dirpath);
            }
            else if(input.length == 3 && input[0] == '-s' && input[1] == '-b'){
                let path = input[2];
                BrkSpcs.wCatObj3(dirpath);
                GiveNoOfNonEmpLine.wCatObj5(dirpath);
            }
            else if(input.length == 3 && input[0] == '-n' && input[1] == '-b'){
                let path = input[2];
                GiveNoOfNonEmpLine.wCatObj5(dirpath);
            }
            else{
                console.log("Invalid Option");
            }
        }
        
}else{
    displayContent.wcat1(input);
}

    