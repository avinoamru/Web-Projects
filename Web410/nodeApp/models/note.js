const database = require('../util/dataBase');


// can be account class
class Note {
    // can ask for username and password
    constructor (author, title, content){
        this.author = author;
        this.title = title;
        this.content = content;
    }
 save() {
  let db =  database.getDB();
  db.collection('My-DB').insertOne(this)
     .then(result => {
      console.log("Success!");
      console.log(result);
     
    }).catch(err => {
        console.log(err);
        
    });
 }



}


module.exports = Note;