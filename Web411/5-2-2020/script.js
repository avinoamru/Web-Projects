function scaryClown(isScary) {
  return new Promise ((resolve,reject)  => {
    isScary ? resolve('yes') : reject('Not scary');
   });
}

// This is .than .catch methods
let myPromise = new Promise((resolve,reject) => {
    let message ="This is the resolve of myPromise";
    myPromise.resolve(()=> {
        return message;
    })
    console.log(resolve());})
    .then((output) => {
    console.log(output + " Success!");
    }).catch(()=>{
    console.log("Failed");});

// This is async .await method
async function wait() {
    let thisPromise = new Promise((resolve,reject) => {
        message = "Hello World!";
        setTimeout(()=> resolve(message),1000);
    })
    let showPromise = await thisPromise;
    console.log(showPromise);
    

};

wait()