const APIKEY = "3413a8baec115df31f4e2471e81f8a0e"

fetch(`http://api.currencylayer.com/live?access_key=${APIKEY}`).then(async (response) => {
    if(response.ok != true){
        console.log("Some problem with the response status, it is:",response.status);
    }

    const data = await response.json();
    let currencies = data.quotes;
    currenciesKeys = Object.keys(currencies);
    console.log(Object.keys(currencies).length);
    $(document).ready(function () {
        for (let i = 0; i < currenciesKeys.length; i++) {
            let option = Object.keys(currencies)[i];
            console.log(option);
            $("#curlist").append(`<option value=${option}>`);
        }
    });

}).catch((err) => {console.log(err)});

