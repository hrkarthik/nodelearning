var request = require('request');

var accountinfo = (req,res) => {
  request('http://127.0.0.1:3000/home',function(error,response,body){
    console.log(response.statusCode)
    console.log(body)// 200
    if(response.statusCode === 200){
      res.status(response.statusCode)
      res.send(body);
    }
    else{
      res.status(response.statusCode);
      res.send('oops');
    }
    //console.log(response.headers['content-type']) // 'image/png'
  });
};

module.exports={
  accountinfo
};
