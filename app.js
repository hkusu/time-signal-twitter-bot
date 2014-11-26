
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

var Twit = require('twit');
var CronJob = require("cron").CronJob;
var moment = require('moment');

var T = new Twit({
  consumer_key: 'aSLuztuX7B4950nZGOEeZIkDO'
  , consumer_secret: 'T9PlOk7tRc9xxqFHhGmQE4x3nysrkzQN0NO0OzNBo6hJeISPx1'
  , access_token: '2418610800-DiJzhMOPGOWoDvAHxO7fUzqsUid9FteEamFKtxO'
  , access_token_secret: 'ZESfr7znD0w6Vy35R3bLEpgzZtjfvBfj8nPylIT7pWs5w'
});

var C = new CronJob({
  cronTime: '*/10 * * * * *',
  onTick: function () {
    tweet();
  },
  start: true
});

function tweet(){
  var message = moment().utc().add('h', 9).format("現在、MM月DD日 HH時mm分です。");
  console.log(message);

/*
  T.post('statuses/update', { status: message }, function(err, data, response) {
    //console.log('Tweet！');
  });
*/
}
