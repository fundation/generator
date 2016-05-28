'use strict';

// Required libraries
var assert = require('chai').assert;
var app = require('../app.js')(8081);

// Set the port for supertest
var request = require('supertest');
request = request('http://localhost:8081');

//
describe('Homepage Route', function(){
  var response;
  // Run this before the test is run
  before(function(done) {
    request.get('/')
      .end(function(err, res){
        response = res;
        done();
    });
 });

 it('should return a 200', function(){
   assert.equal(response.status, 200);
 });

});
