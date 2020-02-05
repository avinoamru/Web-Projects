/**
 * author: Avinoam
 */

 let darkMode = () => {
     if(document.body.style.backgroundColor !== "grey"){
        
        document.body.style.backgroundColor = "grey";
        document.getElementById("mode").innerHTML = "Light Mode"
        document.getElementById("mode").style.color = "black"
        document.getElementById("mode").style.backgroundColor = "white"

     }
     else{
        document.body.style.backgroundColor = "white";
        document.getElementById("mode").innerHTML = "Dark Mode"
        document.getElementById("mode").style.backgroundColor = "black"
        document.getElementById("mode","para").style.color = "white";
        


    }
     
   

 }