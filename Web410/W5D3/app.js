const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
//  const ejs = require('ejs');

app.set('view engine',  'ejs');



app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res, next) => {

res.sendFile(path.join(__dirname, '/views/home.html'), (err) => {
    console.log(err);
    console.log('you are in the home page');

} ) 

});


app.post('/send-note', (req, res, next) => {

    console.log(req.body);

    // let arr = [];

//    if (arr.length == 0){
//     fs.writeFile(path.join(__dirname, '/data/data.json'),JSON.stringify(arr) , (err) => {
//         console.log(err)
//         arr.push(req.body);
//      res.redirect('/about')});
//    }
//    else{

    fs.readFile(path.join(__dirname, '/data/data.json'), (err, data) => {

        console.log(err);
        let arr = JSON.parse(data);
        
        arr.push(req.body);


        fs.writeFile(path.join(__dirname, '/data/data.json'),JSON.stringify(arr), (err) => {
            console.log(err); 
            res.redirect('/read')});

    } );

    app.get('/read', (req, res, next) => {
        fs.readFile(
            path.join(__dirname, '/data/data.json'),
            (err, data) => {
    
                res.render('read', {usernames: JSON.parse(data)})
            }
        )
    });

//    }

   

   

})

app.get('/about', (req, res, next) => {

    res.write('<h1 style="margin-left:40%; color:blue;" >This is my about page</h1>');
    res.write('<a href="http://localhost:3000">Home</a>')
    console.log('you are in about page');

});



app.use(express.static('./public'));





app.listen(3000);