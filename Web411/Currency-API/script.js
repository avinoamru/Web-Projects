const APIKEY = "3413a8baec115df31f4e2471e81f8a0e"



// Fetching the main endpoint and getting the array of options to inputs
fetch(`http://api.currencylayer.com/live?access_key=${APIKEY}`).then(async (response) => {
    if(response.ok != true){
        console.log("Some problem with the response status, it is:",response.status);
    }

    const data = await response.json();

    let date = document.getElementById("inputDate");

    const todayDate = new Date();
    
    
    let today = {
        "day": todayDate.getDate(),
        "month":todayDate.getMonth(),
        "year": todayDate.getFullYear()
    }

    function checkDate(input){
        input = input.toString();
            if (input.length <= 1){
                input = "0"+input;
            }
        return input
    }
    today.month = checkDate(today.month)
    today.day = checkDate(today.day)

   date.value = `${today.year}-${today.month}-${today.day}`

    
    
    
    let currencies = data.quotes;
    currenciesEntries = Object.entries(currencies);
  
    
    $(document).ready(function () {
       var option, optionKey;
       
      
  
        for (let i = 0; i < currenciesEntries.length; i++){

            // adding the names of the currencies to the select list
            option = currenciesEntries[i];
            optionKey = option[0];
            optionKey = optionKey.slice(3,optionKey.length);
            $("#curlist").append(`<option value = ${optionKey}>${optionKey}</option>`);
            $("#curlist-2").append(`<option value = ${optionKey}>${optionKey}</option>`);

            
            

          
        }

        
        
        
        

    });
    
    




}).catch((err) => {console.log(err)});


 
 

function currencyExchange() {

    let date = document.getElementById("inputDate");

    
    fetch(`http://api.currencylayer.com/historical?date=${date.value}&access_key=${APIKEY}`)
    .then(async (response) => {
    if(response.ok != true){
        console.log("Some problem with the response status, it is:",response.status);
    }

    const data = await response.json();
    
    
    let currencies = data.quotes;
    currenciesEntries = Object.entries(currencies);

    let input = document.getElementById("curlist");
    let input2 = document.getElementById("curlist-2"); 
    
    let option, optionKey, optionValue, inputValue1, inputValue2, inputKey1, inputKey2;

for (let i = 0; i < currenciesEntries.length; i++){

    // adding the names of the currencies to the select list
    option = currenciesEntries[i];
    optionKey = option[0];
    optionKey = optionKey.slice(3,optionKey.length)
    optionValue = option[1];
    
   
    

    
    // checking if the inputed key matches a key in the array

    if ( input.value  == optionKey){
        inputKey1 = optionKey;
        inputValue1 = optionValue;
        console.log(inputKey1, inputValue1);
        
    }

    if (input2.value == optionKey) {
        inputKey2 = optionKey;
        inputValue2 = optionValue;
        console.log(inputKey2,inputValue2);
        
    }
  
}

console.log("Input key 1:", inputKey1, "Input value 1:", inputValue1);
console.log("Input key 2:", inputKey2, "Input value 2:", inputValue2);



let number = document.getElementById("number").value;
let result = (inputValue2/inputValue1) * number;
result = result.toFixed(2)


$(document).ready(function () {
    $("#result").empty();
    $("#result").append(`${number} ${inputKey1} equals ${result} ${inputKey2}`);
});


}).catch((err=>{console.log(err);
}))

}

