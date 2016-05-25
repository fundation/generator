'use strict';

var article = require('fundation').model.article;

module.exports = function (app) {

app.route('/').get(function (req, res, next) {
  res.render('homepage.swig', {
    latestArticles: article.recent()
  });
});

};
