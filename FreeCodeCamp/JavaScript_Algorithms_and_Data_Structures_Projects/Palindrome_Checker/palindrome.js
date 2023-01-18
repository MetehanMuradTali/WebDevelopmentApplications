function palindrome(str) { 
    //    Meanings of Regexes
    // \p{P} gets all puntuaction
    // \p{S} gets all symbols
    // \s    gets whitespaces 
    // \g    for searching all instances of it in string
    // \u    for supporting unicode
    str = str.replace(/[\p{P}\p{S}\s]/gu,"").toLowerCase()  //find all  non-alphanumeric characters and delete them.Then change case to lowercase for every char.
    if(str.length==0){ //if there's no char. return true
      return true;
    }
    for(let i =0 ; i<str.length/2;i++){//compare indexes till half 
      if(str[i]!=str[str.length-i-1]){
        return false  //if there's any inequality return false
      }
    }
    return true; //if there's no problem so far it means that its a palindrome so return true
  }
  
  console.log(palindrome("1 eye for of 1 eye."));
  