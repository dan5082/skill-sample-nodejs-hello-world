var http = require('http');

const url = "someUrlThatNickWillGiveMe";
var responseString = "";

var msg = "Hello World!";
//console.log(msg);

exports.getCurrentDrinks = function (callback) {
    //var drink = {};
    //var drinks = []; // should this be = {}
    console.log(msg);

      http.get(url, (response) => {
          let data = '';
          response.on('data' , (chunk) => {
              data += chunk;
          });

    response.on('end', () => {
        var drinkArr = JSON.parse(data);
        responseString = this.getOnTapSpeech(drinkArr);

    callback(drinkArr);// kinda confused what a callback is for
    });
   })
    .on('error', (err) => {
        console.log("Error: " + err.message);

    responseString = "Sorry we are having issues connecting to kegerator database";


     });
}

    exports.getOnTapSpeech = function(drinkArr){

        if(drinkArr.length == 0){
            return "There are no drinks on tap! Better start brewing!"
        }
        if(drinkArr.length == 1){
            var res = "We just have some " + drinkArr[0] + " on tap. It has an ABV percentage of "
            + drinkArr[0].ABV;

            if(drinkArr[0].amountRem < 2000){
                res += ". There isn't much left, so please drink responsibly"
            }

            return res;
        }else{
            var res = "We have some ";
            while(drinkArr.length > 1){
                var temp = drinkArr.pop();
                res += temp + " It has an ABV percentage of " + temp.ABV;
                if(temp.amountRem < 2000){
                    res += ". There isn't much left, so please drink responsibly"
                }

                res += " and in addition we also have ";
            }

             res += drinkArr[0] + " on tap. It has an ABV percentage of "
                + drinkArr[0].ABV;

            if(drinkArr[0].amountRem < 2000){
                res += ". There isn't much left, so please drink responsibly"
            }

            return res;
        }
    }

    exports.getOutput = function(){
    return responseString;
}