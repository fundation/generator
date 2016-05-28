'use strict';

module.exports = function (app) {

  app.route('/test').get(function (req, res, next) {
    res.render('test.swig');
  });

  app.route('/some/api/call').get(function (req, res, next) {
    res.json({
      hello: 'world'
    });
  });

};
