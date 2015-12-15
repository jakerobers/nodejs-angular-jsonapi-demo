var express = require('express');
var app = express();
var HospitalSerializer = require('./serializers/hospital.js');
var EquipmentSerializer = require('./serializers/equipment.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api/hospitals', function (req, res) {
  //get your data from the db here. Im just using a json file for simplicity.
  var hospital_data = require('./hospitals-mock.js');


  var json_response = new HospitalSerializer(hospital_data).serialize();
  res.json(json_response);
});

app.get('/api/equipment', function (req, res) {
  //get your data from the db here. Im just using a json file for simplicity.
  var equipment_data = require('./equipment-mock.js');


  var json_response = new EquipmentSerializer(equipment_data).serialize();
  res.json(json_response);
});


app.get('/api/hospital/:id', function(req, res) {
  var hospital_id = req.params.id;
  var hospital_data = require('./hospital' + hospital_id + '-mock.js');

  var json_response = new HospitalSerializer(hospital_data).serialize();
  res.json(json_response);
});

app.get('/api/equipment/:id', function(req, res) {
  var hospital_id = req.params.id;

  var json_response = require('./equipment' + hospital_id + '-mock.js');
  res.json(json_response);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});