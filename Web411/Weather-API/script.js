const APIKEY = "d9346072d6699bbf487242a9cdecda9b"


function search(){
const inputCity = document.getElementById("ctinput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APIKEY}`)
    .then((response => {
    if (response.ok !== true){
        console.log("There is an error with the status:",response.status);
    }

    return response.json().then((data => {
    console.log(data);

      let sunrise = data.sys.sunrise,
            sunset = data.sys.sunset,
            timezone = data.timezone,
            temp = data.main.temp;

           
            
            sunrise = sunrise * 1000 + (timezone * 1000);
            sunset = sunset * 1000 + (timezone * 1000);

            sunriseDT = new Date(sunrise);
            sunsetDT = new Date(sunset)

            // Sunrise time
            let srhr = sunriseDT.getUTCHours(),
            srmn = sunriseDT.getUTCMinutes();

            // Sunset time
            let snhr = sunsetDT.getUTCHours(), 
            snmn = sunsetDT.getUTCMinutes();

            function K2C(kelvin){
                if (typeof(kelvin) !== typeof(2)){
                    console.log("Enter a number to convert Kelvin to Celcius");
                }
                let c =  kelvin - 273.15 ;
                return c;
            }
            let getTemp = K2C(temp);
            getTemp = getTemp.toFixed(2);

        document.getElementById("result").innerHTML = `Sunrise- ${srhr}:${srmn} <br>Sunset- ${snhr}:${snmn} <br>
        The TEMP is = ${getTemp}&#8451;`
       
    }))


    }))
    .catch((err => {
        console.log(err);

    }))
}
