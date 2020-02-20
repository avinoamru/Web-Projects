const getUser = () => {
    
fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => {
    if (response.ok == false){
        console.log("It's seems we got a problem here, the response status is", response.status)
        return;
    }
    response.json().then(function(data){
        console.log(data);
        
        
        // creating array of data values
        const users = Object.values(data)
        const idNum = Math.floor(Math.random(1) *users.length )
        const user = users[idNum]
        
        // printing the values to the inputs
        document.getElementById("name").value = user.name;
        document.getElementById("username").value = user.username;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone
        document.getElementById("website").value = user.website
        document.getElementById("street").value = user.address.street
        document.getElementById("suite").value = user.address.suite
        document.getElementById("city").value = user.address.city
        document.getElementById("zipcode").value = user.address.zipcode
        
    })
})
.catch(err => { 
    console.log("The error is" ,err)
})

}

getUser()