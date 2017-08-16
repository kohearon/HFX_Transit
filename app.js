var express = require('express');
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var app = express();

app.get('/all-vehicles', function (req, res) {

  var requestSettings = {
    method: 'GET',
    url: 'http://GTFS.halifax.ca/TMGTFSRealTimeWebService/realtime/Vehicle/VehiclePositions.pb',
    encoding: null
  };

  request(requestSettings, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
      feed.entity.map( entity => {
        return {
          'lat': entity.vehicle.position.latitude,
          'lon': entity.vehicle.longitude,
        }
      })
      res.send(feed);
    }
  });
})

app.listen(3000, function () {
  console.log('Listening on Port 3000');
})

module.exports = app;
