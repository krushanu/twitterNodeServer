var request = require('request');
var config = require('./config');
var qs = require('querystring');

functions = {
    authorize: function(req, res) {
        // var header = config.consumerkey + ':' +config.consumersecret;
        // var encheader = new Buffer(header).toString('base64');
        // var finalheader = 'Basic ' + encheader;

        var requestTokenOauth = {
          consumer_key: config.consumerkey,
          consumer_secret: config.consumersecret,
          callback: ''
        };



      request.post({url: 'https://api.twitter.com/oauth/request_token', oauth: requestTokenOauth}, function(error, response, body) {
          if(error) {
            console.log(error);
          }
          else {
              config.bearertoken = qs.parse(body);
              res.send(config.bearertoken);
          }
      });

        // request.post('https://api.twitter.com/oauth/request_token', {form: {'grant_type': 'client_credentials'},
        // headers: {Authorization: finalheader}}, function(error, response, body) {
        //     if(error) {
        //       console.log(error);
        //     }
        //     else {
        //         config.bearertoken = JSON.parse(body).access_token;
        //
        //         res.json({data:config.bearertoken});
        //     }
        //
        // })
    }
}
module.exports = functions;
