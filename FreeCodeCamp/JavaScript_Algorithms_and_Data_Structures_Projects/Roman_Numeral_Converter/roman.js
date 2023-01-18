function convertToRoman(num) {
    let str =controller(num);
    console.log(str);
    return str;
   }

//calculated numbers one by one
//Calculate thousands number by (num/1000) 
//Calculate hundreds number by (num%1000)/100               Also use Math.floor() for getting rid of float after doing division
//Calculate tens number by (num%100) /10
//Calculate ones number by (num/10)  

function controller(num){
    let str =  `${calculateThousands(Math.floor(num/1000))+calculateHundreds(Math.floor((num%1000)/100))+calculateTens(Math.floor((num%100)/10))+calculteOnes(num%10)}`;
    return str;
}

function calculateThousands(num){
    let str = ""; 
      for(let i=0;i<num;i++){
        str+="M"
      }
    return str;
}

function calculateHundreds(num){
    let str="";
    if(num>=1 && num<4){
        for(let i=0;i<num;i++){
            str+="C";
        }
    }
    else if(num>=5 && num <9){
        str= "D";
        for(let i=0;i<num-5;i++){
            str+="C";
        }
    }
    num ==4 ? str = "CD" : num==9 ? str="CM" : "";
    return str;
}

function calculateTens(num){
    let str="";
    if(num>=1 && num<4){
        for(let i=0;i<num;i++){
            str+="X";
        }
    }
    else if(num>=5 && num <9){
        str= "L";
        for(let i=0;i<num-5;i++){
            str+="X";
        }
    }
    num ==4 ? str = "XL" : num==9 ? str="XC" : "";
    return str;
}

function calculteOnes(num){
    let str1="";
    if(num>=1 && num<4){
        for(let i=0;i<num;i++){
            str1+="I";
        }
    }
    else if(num>=5 && num <9){
        str1= "V";
        for(let i=0;i<num-5;i++){
            str1+="I";
        }
    }
    num ==4 ? str1 = "IV" : num==9 ? str1="IX" : "";
    return str1;

}

convertToRoman(2014);