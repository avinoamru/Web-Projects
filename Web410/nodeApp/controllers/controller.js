const express = require('express'),
      path = require('path'),
      note = require('../models/note');


// exporting as a const, just require it in the right file.
     exports.getHomePage = (req,res,next) => {

        console.log("Your'e in the Home page");
        res.sendFile(
            path.join(__dirname, '../views/home.html'),
            (err) => {
                console.log(err);
                
            }
        );
        
    };


// exporting as a const, just require it in the right file.
   exports.getWritePage = (req,res,next) =>{

        console.log("your'e in the write page");
        res.sendFile(
            path.join(__dirname, '../views/write.html'),
            (err) => {
                console.log(err);
                
            }
        )
        
    }


    exports.getReadPage = (req,res,next) => {

        console.log("Your'e in the read page");
        res.sendFile(
            path.join(__dirname, '../views/read.html'),
            (err) => {
                console.log(err);
                
            }
        );
        
    };


    exports.postWrite = (req,res,next) => {
        console.log("You're sending the note!\n\n");
        // to see what the user sent
        // console.log(req.body);

        const myNote = new note(
            req.body.author,
            req.body.title,
            req.body.content);

            myNote.save();
        
        res.redirect('/');

    };

   