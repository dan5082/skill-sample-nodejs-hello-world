'use strict';
const Alexa = require("alexa-sdk");
var data = require('./data.js');

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.e4fd514b-3d17-4ccf-b647-5aa6690118c5";
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {

    'AMAZON.HelpIntent': function () {
        const speechOutput = 'This is the kegerator Skill. ';
        const reprompt = 'You can ask me things about the kegerator';

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye! And remember to never stop faking it');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later!');
        this.emit(':responseReady');
    },

    'onTapIntent': function(){
        var self = this;
        var callback = function(drinks){
            var speechOutput = "";
            speechOutput += data.getOutput();
            self.emit(':tell', speechOutput);
        };
        var drinks = data.getCurrentDrinks(callback);
    }


};