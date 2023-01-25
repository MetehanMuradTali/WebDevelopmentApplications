function checkCashRegister(price, cash, cid) {
  let change=cash-price;
  let changeArr=[["PENNY",0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] //creating empty change array
  let cidtotal=0;
  cid.map(x => cidtotal+=x[1]);   // calculating total money in the drawer
  cidtotal=Number(cidtotal.toFixed(3));  //for fixing the float 
  console.log(`cidtotal:${cidtotal}`);   
  console.log(change)
  if(cidtotal>change){                    //if there's enough money in the drawer.  
    while(change>0){                      //trying to get exact change in a while loop. 
      if(change>=100 && cid[8][1]>0){
        cid[8][1]-=100;
        changeArr[8][1]+=100;
        change-=100;
      }
      else if(change>=20 && cid[7][1]>0){
        cid[7][1]-=20;
        changeArr[7][1]+=20;
        change-=20;
      }
      else if(change>=10 && cid[6][1]>0){
        cid[6][1]-=10;
        changeArr[6][1]+=10;
        change-=10;
      }
      else if(change>=5 && cid[5][1]>0){
        cid[5][1]-=5;
        changeArr[5][1]+=5;
        change-=5;
      }
      else if(change>=1 && cid[4][1]>0){
        cid[4][1]-=1;
        changeArr[4][1]+=1;
        change-=1;
      }
      else if(change>=0.25 && cid[3][1]>0){
        cid[3][1]-=0.25;
        changeArr[3][1]+=0.25;
        change-=0.25;
      }
      else if(change>=0.1 && cid[2][1]>0){
        cid[2][1]-=0.1;
        changeArr[2][1]+=0.1;
        change-=0.1;
      }
      else if(change>=0.05 && cid[1][1]>0){
        cid[1][1]-=0.05;
        changeArr[1][1]+=0.05;
        change-=0.05;
      }
      else if(change>=0.01 && cid[0][1]>0){
        cid[0][1]-=0.01;
        changeArr[0][1]+=0.01;
        change-=0.01;
      }
      else{                                                   //if none of the else if above worked that means you cant get exact change you return INSUFFICIENT_FUNDS
       return {status: "INSUFFICIENT_FUNDS", change: []}  
      }
      change=Number(change.toFixed(3));
    } 
  }
  else if(cidtotal == change){                                //if change == cid return false
    return {status: "CLOSED", change: cid}
  }
  else{                                                       //if change > cid return INSUFFICIENT_FUNDS
    return {status: "INSUFFICIENT_FUNDS", change: []} 
  }
  changeArr = changeArr.filter(remove0s);                     //if none of the return above worked that means you have changeArray with change values. Now delete the 0's from the array.
  function remove0s(money){
    return money[1]!=0;
  }  
  changeArr.reverse();                                       //reverse the array so it goes from top value to bottom value.
  return {status: "OPEN", change: changeArr};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));