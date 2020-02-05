
// Write a function that receives 5 numbers as parameter and return the sum between them.

// const sum = function(a,b,c,d,e){
//     return "\nThe sum is: " + (a+b+c+d+e) + "\n";
// }
// console.log(sum(2,1,1,3,3));


// Write a function that receives 2 numbers as parameters  and returns the bigger of them.

const compareNums = function(a,b) {
    if (a>b){
        return "The first number " + a + " is bigger.\n";
    }
    else if (a<b){
        return "\nThe second number " + b + " is bigger.\n";
    }

    else {
        return "The numbers are equal.\n"
    }
}
console.log(compareNums(50,49));


// Write a function that receives an array of names and print all of them inside a alert.

let arrayOfNames = ["name1", "name2", "name3"];

const printNames = (names) => {
    console.log("The names are:");

    for (let i in names){
        console.log("\t\t",names[i]);

    }
}
printNames(arrayOfNames)

// Write a function that receives 2 numbers. Check which is bigger. Alert the message “I love snow” while the smallest number is not equal to the largest.

const checkNumbers = (num1, num2) => {

    while (num1 < num2 + 5){
        if (num1 < num2){
            console.log("The first number "+ num1 + " is smaller than the second number " + num2)
        }
        else if (num1 == num2){
            console.log("The first number "+ num1 + " is equal to the second number " + num2)
        }
        else {
            console.log("The first number "+ num1 + " is bigger than the second number " + num2)
        }

        num1++
    }

}



// Write a function that receives 5 numbers as parameter and return the average between them.

function getAverage (a,b,c,d,e){
    var average = (a+b+c+d+e)/5;
    return "\nThe average is: " + average
}
console.log(getAverage(20,10,30,50,40));





// jQuery time
$(document).ready(function () {


// creating the buttons inside the whiteboard in the regular way
    // $(".whiteboard").html("<button>Function 1</button>"+
    //                       "<button>Function 2</button>"+
    //                       "<button>Function 3</button>"+
    //                       "<button>Function 4</button>"+
    //                       "<button>Function 5</button>");

// creating the buttons/any element in my way
const generateElementsForClass = (elementParent, elementToCreate, elementName, elementId, numberOfElements) => {

    for (let i = 0; i < numberOfElements; i++){$(elementParent).append("<" + elementToCreate +" id = " +elementId +"-" + (i+1) + " class = " + elementToCreate + "s" +">" + elementName + " " + (i+1) + "</" + elementToCreate + ">");
    if (elementName == ""){
        $(elementParent).append("<" + elementToCreate +" id = " +elementId +"-" + (i+1) + " class = " + elementToCreate + "s" +">" + elementName + "</" + elementToCreate + ">")
    }
    else if ($("#" + elementId).length != 0){
        continue
    }
}}

generateElementsForClass(".menu", "button", "Function","btn", 5);

function function1Sum (){
    let total;
    for(let i =0; i<anArray.length; i++){
        if (anArray[i] == ""){
            anArray[i] = 0;
            console.log(anArray[i]);
            
        }
        total = total + anArray[i];
        console.log(total);  
    }
}

$("#btn-1").click(function (){
    $(".content").empty();
    $(".content").append("<ul></ul>")
      for (let i = 0; i < 5; i++){
          idNum = i+1;
        $(".content ul").append("<li>" + "<input type = \"number\" id = " + "number" + idNum + ">"+"</li>"); 
      }

      $(".content").append("<button id = \"submitSum\" onclick=function1Sum()>Calculate sum</button>")
      
    
})

 
let arrayOfVals = [num1 = $("#number1").val(),
          num2 = $("#number2").val(),
          num3 = $("#number3").val(),
          num4 = $("#number4").val(),
          num5 = $("#number5").val()]




$("#submitSum").click(function(){
    function1Sum()  
})



$("#btn-2").click(function (){
$(".content").empty();
$(".content").append("<p>Hello world</p>");

})







});

// let     num1 = document.getElementById("number1").value,
//         num2 = document.getElementById("number2").value,
//         num3 = document.getElementById("number3").value,
//         num4 = document.getElementById("number4").value,
//         num5 = document.getElementById("number5").value;

