const express = require('express'),
      router = express.Router;

app.get('/', (req,res,next) => {

    console.log("Your'e in the Home page");
    res.write("<h1>Welcome</h1>")
    res.end();
});


app.get('/register', (req,res,next) =>{

    console.log("your'e in the register page");
    res.write("<h1>Register page</h1>");
    res.end();
});





