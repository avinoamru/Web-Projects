const express = require('express'),
      router = express.Router(),
      path = require('path'),
      controller = require('../controllers/controller'),
      homePage = controller.getHomePage ,
      writePage = controller.getWritePage ,
      readPage = controller.getReadPage;


router.get('/', homePage);


router.get('/write', writePage);
router.post('/write',  controller.postWrite);

router.get('/read', readPage);


module.exports = router;




