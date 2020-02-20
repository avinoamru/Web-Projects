var APIKey = "UGmP7NlevUlqekQ5mfCORmTf4acrgy2e8XyRe81P";
var D;


let apodl = (datal) => {
    
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
    .then(async response => {
      if (response.ok == false) {
        console.log(
          "There is a problem with the status, it is currently ",
          response.status
        );
      }
      const data = await response.json();
      
      
      datal = data.hdurl;
      
      
      return datal
      
    })
    .catch(err => {
      console.log("There is an error, the error is:", err);
    });

};

let lala = apodl(h)
console.log(lala);


