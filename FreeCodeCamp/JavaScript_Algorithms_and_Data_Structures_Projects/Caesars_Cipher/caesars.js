function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //define Alphabet
    let modifiedStr="";                         //define decoded string
    for(let i =0 ; i<str.length ; i++){
      let currentChar=str.charAt(i);            //find the current char
      let isItLetter=alphabet.indexOf(currentChar);  //returns index of letter if it is in the alphabet. -1 means its a non alphabetic char
      if(isItLetter!=-1){
        if(isItLetter>=13){                         //check if index > 13. if it is then you can decrease 13 directly. if not you need to add 25
          modifiedStr+=alphabet[isItLetter-13];
        }
        else{
          modifiedStr+=alphabet[isItLetter-13+26];   
        }
      }
      else{
        
         modifiedStr+=str[i];                   
      }
    }
    return modifiedStr;
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));