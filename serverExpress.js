var express = require('express')

var app = express()
var cardLib = require('./card')

//var cards = []
//var ResData =[]
var hostDtac = "http://localhost:3001";

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

//app.get('/1.0/paynow/cashcard/:id', cardLib.get);
//app.post('/1.0/paynow/cashcard', cardLib.create);

app.post('/1.0/paynow/cashcard/:id', jsonParser, cardLib.get);

// app.get('/1.0/paynow/cashcard/:id', function (req, res) {

//  var id = req.params.id;
 
//   ResData = {returncode:"0", 
//         returndescription:"Success",
//         transaction:id,
//         transactionDate:"2014/02/18 12:30:23:456",
//         transactionstatus:"Success",
//         cardserialnumber:"88888888",
//         cardvalue:99,
//         currencycode:"THB"        
//         };
//   //--
//   request.get(hostDtac+'/CashCardGameOnline/rest/Card/' + id, function(req, res, body){
//     var info = JSON.parse(body);
//     console.log(info.faceValue);
//     ResData.cardvalue =  info.faceValue;
//   });


//   console.log('Transaction number ::'+ id);
//   console.log(ResData);
//   res.json(ResData);
// });


  var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})




