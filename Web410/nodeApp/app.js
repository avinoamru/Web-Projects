const express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      fs = require("fs");




app.get('/', (req,res,next) => {

    fs.readFile('home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});


app.get('/register', (req,res,next) =>{

    console.log("your'e in the register page");
    res.write("<h1>Register page</h1>");
    res.end();
});










app.listen(3000);
       