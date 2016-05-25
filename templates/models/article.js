'use strict';

var debug = require('debug')('model:article');

module.exports = function(app) {

  return {

    recent: function () {
      return [{
        title: 'First Article'
      },{
        title: 'Second Article'
      }];
    }

  };

};

