function telephoneCheck(str) {
  // Regex Explaination
  // ^ in the start means string needs to start with this
  // $ in the end means string needs to end with this
  // 1? means there can be zero or one 1
  //[\s]? means there can be zero or one empty space
  //[0-9] for getting a number between 0-9(included)
  //[-\s]? means there can be zero or one empty space or hyphen(-)
  // /g  for searching all instances of it in string
  // /( /) for getting parantheses 


  let regex = /^1?[\s]?[0-9][0-9][0-9][-\s]*[0-9][0-9][0-9][-\s]*[0-9][0-9][0-9][0-9]$/g;    //without parantheses
  let regex2 = /^1?[\s]?\([0-9][0-9][0-9]\)[-\s]*[0-9][0-9][0-9][-\s]*[0-9][0-9][0-9][0-9]$/g;  // with parantheses
  
  let test1= str.match(regex);     //if theres a match it means test1 is not null anymore
  let test2= str.match(regex2);    //if theres a match it means test2 is not null anymore 
  if(test1!=null){
    console.log("test1")
    return true
  }
  else if(test2!=null){
    return true
  }
  else{
    return false
  }
  }
console.log(telephoneCheck("(6054756961)"));

