btn0=document.getElementById("btn0");
btn1=document.getElementById("btn1");
btnClr=document.getElementById("btnClr");
btnEql=document.getElementById("btnEql");
btnSum=document.getElementById("btnSum");
btnSub=document.getElementById("btnSub");
btnMul=document.getElementById("btnMul");
btn0Div=document.getElementById("btnDiv");
res=document.getElementById("res");

btn0.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+0;
});
btn1.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+1;
});

btnClr.addEventListener("click",()=>{
    res.innerHTML= "";
});

btnEql.addEventListener("click",()=>{
    let numbers= res.innerHTML.match(/[\d]+/g);
    if(res.innerHTML.indexOf("+")!=-1){
        res.innerHTML= (parseInt(numbers[0],2)+parseInt(numbers[1],2)).toString(2);
    }    
    else if(res.innerHTML.indexOf("-")!=-1){
        res.innerHTML= (parseInt(numbers[0],2)-parseInt(numbers[1],2)).toString(2);
       
    }
    else if(res.innerHTML.indexOf("*")!=-1){
        res.innerHTML= (parseInt(numbers[0],2)*parseInt(numbers[1],2)).toString(2);
    }
    else if(res.innerHTML.indexOf("/")!=-1){
        res.innerHTML= (parseInt(numbers[0],2)/parseInt(numbers[1],2)).toString(2);

    }
});

btnSum.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+"+";
});

btnSub.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+"-";

});

btnMul.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+"*";

});

btnDiv.addEventListener("click",()=>{
    res.innerHTML= res.innerHTML+"/";
});
