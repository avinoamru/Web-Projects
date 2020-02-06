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
        document.getElementById("temp-result").innerHTML = f + " Faherenheit is:" + answer.toFixed(2); + " celcius"
    }


    function convert2F () {
        let c = document.getElementById("celcius").value;
        let answer = (c*1.8)+ 32;
        document.getElementById("temp-result").innerHTML = c + " Celcius is:" + answer.toFixed(2); + " Faherenheit"

    }
 


