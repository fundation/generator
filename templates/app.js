'use strict';

module.exports = function(port) {
  // Required libraries
  var fundation = require('fundation');
  var app = require('express')();

  // Add fundation to express
  app.use(fundation.init());

  // Start the server
  app.listen(port, function(err) {
    if ( err ) {
      console.log(err);
    }
  });

  return app;
}
