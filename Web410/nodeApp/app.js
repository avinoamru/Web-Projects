const express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      fs = require("fs"),
      router = require('./routes/route'),
      database = require('./util/dataBase');






// this is parsing every request automatically. !important!
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);

app.use(express.static('./public'));



database.mongoConnect(() => {
    app.listen(3000)
});
       