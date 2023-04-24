var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/uploadform', function(req, res, next) { 
res.render('uploadform'); 
});
router.post('/uploadtodb', function(req, res, next) {
  
  // store all the car input data
  const carDetails=req.body;
 
  // insert car data into allcars table
  var sql = 'INSERT INTO allcars SET ?';
  db.query(sql, carDetails,function (err, data) { 
      if (err) throw err;
         console.log("Car data has been inserted successfully on DB "); 
  });
 res.redirect('/cars/uploadform');  // redirect to car upload form page after inserting the data
}); 

// this script to fetch list of all cars from databse table
router.get('/top-selling-list', function(req, res, next) {
    var sql='SELECT * FROM allcars where TopSeller="yes" limit 10';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('top-selling-list', { title: 'Car List', userData: data});
  });
});
module.exports = router;
