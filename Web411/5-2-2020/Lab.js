// question 1 section
 
function multiplyNums (){
let num1 = document.getElementById("number1").value, 
     num2= document.getElementById("number2").value;


    console.log(num1,num2);
    
    let total = num1 * num2;
    document.getElementById("q1-result").innerHTML ="The result is: "+ total;
    console.log(total);
    
}

function divideNums (){
    let num1 = document.getElementById("number1").value, 
         num2= document.getElementById("number2").value;
    
    
        console.log(num1,num2);
        
        let total = num1 / num2;
        document.getElementById("q1-result").innerHTML = "The result is: "+ total;
        console.log(total);
        
    }


    // Question 2 section

    function convert2C() {
        let f = document.getElementById("faher").value;
        let answer = (f-32)* (5/9);
        document.getElementById("temp-result").innerHTML = f + " Faherenheit is:" + answer.toFixed(2) + " celcius";
    }


    function convert2F () {
        let c = document.getElementById("celcius").value;
        let answer = (c*1.8)+ 32;
        document.getElementById("temp-result").innerHTML = c + " Celcius is:" + answer.toFixed(2) + " Faherenheit";

    }
 


// question 3 section

// checking for "java" in the start of the string
function checkString(str) {
    let checkFor = "java"
    if (str.toLowerCase().startsWith(checkFor.toLowerCase())){
        return true;
    }
    else {
        return false;
    }
}
// getting and printing the result on screen
function stringResult() {
    let stringJava = document.getElementById("stringInput").value;
    console.log(stringJava);
    stringJava = stringJava.trim()
    let result = document.getElementById("string-result");
    if(checkString(stringJava) == true){
        result.innerHTML = "The inputed string starts with Java"
    }
    else{
        result.innerHTML = "The inputed string doesn't start with Java";
    }

}


// question 4 I can't do, I didn't have enough time today to learn more about promises, I'll do it tomorrow in class
