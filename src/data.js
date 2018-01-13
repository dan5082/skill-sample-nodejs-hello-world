var http = require('http');

const url = "someUrlThatNickWillGiveMe";

exports.getCurrentDrinks = function (callback) {
    var drinks = {};

    /*  http.get(url, (response) => {
          let data = '';
          response.on('data' , (chunk) => {
              data += chunk;
          });
      }
      */

    http.get({
        hostname: 'localhost',
        port: 80,
        path: '/',
        agent: false  // create a new agent just for this one request
    }, (res) => {
        // Do stuff with response
    });

}