// Option 1 JavaScript code

let arrayOfQuotes = ["\"Be yourself; everyone else is already taken.\" \n ― Oscar Wilde",

"\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\" \n ― Albert Einstein",

"\"Be the change that you wish to see in the world.\" \n ― Mahatma Gandhi",

"\"Always forgive your enemies; nothing annoys them so much.\" \n ― Oscar Wilde",

"\"Whether you think you can, or you think you can't--you're right.\" \n ― Henry Ford"]


function generateQuote() {

    let random =  Math.floor(Math.random() * arrayOfQuotes.length);
    console.log(random);
    
    switch (random) {
        case 0: 
        document.getElementById("random-quote").innerHTML = arrayOfQuotes[0];
            break;

        case 1: 
        document.getElementById("random-quote").innerHTML = arrayOfQuotes[1];
        break

        case 2: 
        document.getElementById("random-quote").innerHTML = arrayOfQuotes[2];
            break;

        case 3: 
        document.getElementById("random-quote").innerHTML = arrayOfQuotes[3];
            break;

        case 4: 
        document.getElementById("random-quote").innerHTML = arrayOfQuotes[4];
            break;
    
        default:
            break;
    }

}


// Option 2 JavaScript code


// This is for Enter key press
let input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submit-message").click();
  }
});

// This is to hide the message,
function hideElement(element) {
    let whatever = element.toString();
    setTimeout(function(){ element.innerHTML = ""; }, 2000);
    console.log("dsa")
  }

  // This is submiting the message and calling the hideElement function
function submitMessage () {

let message = document.getElementById("message").value;
let checkDeliver = document.getElementById("delivered");
if (message == ""){
    checkDeliver.style.color = "rgb(138, 43, 43)" ;
    checkDeliver.style.fontWeight = "600"
    checkDeliver.innerHTML = " Message Empty";
    hideElement(checkDeliver);
}
else {
    checkDeliver.style.color = "green";
    checkDeliver.innerHTML = "Last Message Delivered";
 
    hideElement(checkDeliver);
}

document.getElementById("show-message").innerHTML = message;


document.getElementById("message").value = "";





}

