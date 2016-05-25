'use strict';

// Required libraries
var fundation      = require('fundation');
var app            = require('express')();

// Add fundation to express
app.use(fundation.init());

// Start the server
var port = process.env.PORT || 8080;
app.listen(port, function(err) {
  if ( err ) {
    console.log(err);
  }
});
