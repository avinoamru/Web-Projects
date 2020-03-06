export{}

// This is both questions I hust used the arrow function
const calc = (num1:number, num2:number, callback:any) => {
    if (typeof callback == "function"){
         return callback(num1,num2);
    }
}
calc(2,4,(num1,num2)=> {
    
    
    return num1 + num2;
})




/* A promise is a try and catch in an easier syntax.
   You define what to do after a specific code runs and what to do if there is an error.

   Here's an example:
*/

let checkCalc = new Promise((res,reject) => {
    let calcRes = calc(3,5,(n1:number,n2:number)=>{
        return n1*n2;
    })
    if (calcRes > 10) {
       setTimeout(() => {
           res("Calculation is bigger then 10");
           
       }, 100); 
    } else {
        setTimeout(() => {
            reject('Calculation is smaller then 10')
        }, 100);
        
    }
})
checkCalc.then((message) => {
  console.log("this is a then" , message);
    
}).catch((message) => {
    console.log("this is a catch" , message)
})

