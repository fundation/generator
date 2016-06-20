'use strict';

module.exports = function(app) {

  return {

    // When you authenticate with Google/FB/Twitter
    serializeUser: function (response) {
      return new Promise(function(resolve, reject){
        resolve(response);
      });
    },

    // When you retrieve a user from a session
    deserializeUser: function (response) {
      return new Promise(function(resolve, reject){
        resolve(response);
      });
    }

  };

};

