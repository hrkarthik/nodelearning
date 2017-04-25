var express = require('express');
var router = express.Router();
var middleware = require('./middleware');

router.get('/', function(req, res){
	res.send('GET base route');
});

router.post('/', function(req, res){
	res.send('POST base route');
});

router.get('/accountinfo',(req,res) => middleware.accountinfo(req,res));

router.get('/accountinfo/:id',function(req,res){
  res.send('Hitting /accountinfo with id: '+req.params.id);
});

module.exports = router;
