function palindrome(str) {
 
    let temp = "";
    console.log(typeof(temp));
    
    for(let i = str.length-1; i >= 0; i--){
      temp =  temp + str[i];

      if ( str[i].match(/[a-z]/)){
          console.log("this is a letter");
          
      }
      else{
          console.log("This is not a letter");
          
      }
      console.log(i);
      
    }

    
  console.log(temp);
return temp;  
}
  
   palindrome("Hello")