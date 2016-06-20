'use strict';

var passport = require('fundation').passport;

module.exports = function (app) {

app.route('/login').get(function (req, res, next) {
  res.render('login.swig', {
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope : ['profile', 'email']
}));

// the callback after google has authenticated the user
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect : '/profile',
  failureRedirect : '/'
}));

app.route('/user').get(function (req, res, next) {
  // console.log(req.user);
  res.render('user.swig', {
  });
});

// Logging out the user
app.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});

};
