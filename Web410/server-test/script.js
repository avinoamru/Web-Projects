const express = require('express'),
      exp = express(),
      bParser = require('body-parser'),
      fs = require('fs'),
      path = require('path');




      exp.use(bParser.urlencoded({extended: false}));



      exp.get('/', (req, res, next) => {
      
      res.sendFile(path.join(__dirname, '/views/home.html'), (err) => {
          console.log(err);
          console.log('you are in the home page');
      
      } ) 
      
      });
      
      
      exp.post('/send-account', (req, res, next) => {
      
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
      
          exp.get('/read', (req, res, next) => {
              fs.readFile(
                  path.join(__dirname, '/data/data.json'),
                  (err, data) => {
          
                      res.render('read', {usernames: JSON.parse(data)})
                  }
              )
          });
      
      //    }
      
         
      
         
      
      })
      
     
      exp.get('/register', (req, res, next) => {

        res.sendFile(path.join(__dirname, '/views/register.html'), (err) => {
            console.log(err);
            console.log('you are in the registration page');
        
        } ) 
        
        });
      
      
      exp.use(express.static('./public/styles/'));























      exp.listen(3000);