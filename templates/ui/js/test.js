var request = require('browser-request');
request({
  url: '/some/api/call',
  json: true
}, function(error, res, body){
  console.log(body);
});
