// Week 5 Day 1 - Avi 



// question 1

/* Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6, 7. */

var triangle_Side1 = 5;
var triangle_Side2 = 6;
var triangle_Side3 = 7;

function calcArea(side1, side2, side3){


var perimeter = (side1 + side2 + side3) / 2;

var triangleArea = Math.sqrt(perimeter *(perimeter - triangle_Side1)* (perimeter - triangle_Side2) * (perimeter - triangle_Side3));

console.log("The triangle area is: " +  triangleArea);

} 
calcArea(triangle_Side1, triangle_Side2, triangle_Side3);


// question 2

/* Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given
integer. */

var numArray = [1,2,3,4,5,6,7,8,9,10];

function cubeNumList(anArray){

    var base = 0;


    // Math.pow(int.int)
    for (var x = 0; x < anArray.length; x++) {

            base =  base + (anArray[x] * anArray[x] * anArray[x]);

        
        

    }


    console.log("Numbers to calculate their sum of cubes: " + numArray);
    console.log("This is the sum of the cubes: " + base);

}
cubeNumList(numArray);




// question 3

/* Write a JavaScript program that capitalizes all the letters in a given string. */

var test = "CHANGE THIS";
function capitalize(aString){
    
  
    var upperCased = "";
    

    for (i = 0; i < aString.length; i++){

        var character = aString.charAt(i);
        var upperCase = character.toUpperCase();
     
        upperCased = upperCased + upperCase;
    
    }

    console.log("The string before capitalize: " + test);
    console.log("The string after capitalize: " + upperCased);
}

capitalize(test);



// question 4

/* Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess
number, the program will display a message "Good Work" otherwise display a message
"Not matched". */

var guessedNumber = 10;
function guessTheNumber(aNumber){

    var randomNumber = Math.floor(Math.random() * 10) + 1;
// var guessedNumber = parseInt(prompt("Guess a number between 1-10"));



if(aNumber === randomNumber){
    console.log("Good Work!");
} 
    else{
    console.log("Not Matched, the number was: " + randomNumber);
}

console.log("The number guessed: " + guessedNumber);
}
guessTheNumber(guessedNumber);


// question 5

/*  Write a JavaScript program to replace all the numbers with a specified number of a
given array of integers. */

var arrayToReplace = [11,12,13,14,15,16,17,18,19];

function replaceNum (anArray) {

    var newArray = [];
    for (var i = 0; i < anArray.length; i++){
        
        var numToString = anArray[i].toString();
        var replace = numToString.replace(/1/, '2');
        var stringToNum = parseInt(replace);
        newArray.push(stringToNum);

         
    }
    
    console.log("Array before replacing the first number to 2  :" + arrayToReplace);
    console.log("The new array after replacing the first number to 2:  " + newArray);
}
replaceNum(arrayToReplace);



// question 6

/* Write a JavaScript program that sorts a given array. */



/* a simple way but not that good since it's only care about the first number.. 

 function sortArray(anArray) {

   var sortedArray =  anArray.sort();
    console.log("This is the sorted array: " + sortedArray);

} */ 

// now the real deal    (quick sort)

arrayToSort = [5,8,98,1,32,15,42,21,30,78,87,96,2]
console.log("The unsorted array: " + arrayToSort);


function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function sortArray(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            sortArray(items, left, index - 1);
        }
        if (index < right) { 
            sortArray(items, index, right);
        }
    }
    return items;
}
var sortedArray = sortArray(arrayToSort, 0, arrayToSort.length - 1);

console.log("The sorted array: " + sortedArray); 



// question 7

/* Write a JavaScript program that reverses a given array */

var reverseMe = [1,2,3,4,5,6,7,8,9,10];


function reverseArray(anArray) {

    var reversedArray = [];

    for (var i = anArray.length - 1; i >= 0; i--){
        
       reversedArray.push(anArray[i]);

    }

    console.log("The array to reverse: " + reverseMe);
    console.log("The reversed array: " + reversedArray);
}
reverseArray(reverseMe);



// question 8 

/* Create an array “customer” objects. Each customer object should have at least 3 fields:
“name”, “email”, “order”. Create at least 3 such objects. */

    var customer1 = {
    name: 'Avi',
    email: 'avitheman@gmail.com',
    order: 3500
    }

    var customer2 = {
    name: 'Jonah',
    email: 'jonah32@gmail.com',
    order: 2000
    }

    var customer3 = {
    name: 'Rachel',
    email: 'rachelfromfriends@gmail.com',
    order: 1553
    }

    var customer4 = {
     name: 'Norman',
     email: 'norman1@gmail.com',
     order: 2343
        }

    var customer5 = {
    name: 'Mickey mouse',
    email: 'mickeythemouse@gmail.com',
    order: 10000
        }

    var customers = [customer1, customer2, customer3, customer4, customer5];


// question 9

/* Filter the customers array to show the customer with the most expensive order. */

function sortCustomersByOrder(customersArray) {

    var customerOrderArray = [];
    
    for (var i = 0; i < customersArray.length; i++){

         customerOrderArray.push(customersArray[i].order);
        

    }

    var theMostExpensiveOrder = Math.max(...customerOrderArray) ;

    console.log("The array of all orders: " + customerOrderArray);
    console.log("customerOrderArray: " + theMostExpensiveOrder);

}

sortCustomersByOrder(customers);

