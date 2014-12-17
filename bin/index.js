var app = require('../app');
var Twit = require('twit');
var CronJob = require("cron").CronJob;
var moment = require('moment');
//var http = require('http');

var T = new Twit({
  consumer_key: app.get('options').key,
  consumer_secret: app.get('options').secret,
  access_token: app.get('options').token,
  access_token_secret: app.get('options').token_secret
});

//var cronTime = '0 0 0-14 * * *';
var cronTime = '*/10 * * * * *';

new CronJob({
  cronTime: cronTime,
  onTick: function () {
    tweet();
  },
  start: true
});

function tweet(){
  var message = moment().utc().add(9, 'h').format("ただいま MM月DD日 HH時mm分です。");
  //console.log(message);

  console.log('Tweet!');

  //T.post('statuses/update', { status: message }, function(err, data, response) {
  //  //console.log('Tweet!');
  //});
}
