var express = require('express');
var app = express();
var routes = require('./routes.js');
var config = require('./config.js');
var servercfg = config.servercfg;
var circularjson = require('circular-json');

app.use('/',(req,res,next) => {
  //console.log(circularjson.stringify(req));
  console.log('Got A Hit to: '+req.path+" : "+ Date.now());
  //console.log(circularjson.stringify(res));
  next();
});

app.use('/',routes);

app.listen(servercfg.port,servercfg.host);
