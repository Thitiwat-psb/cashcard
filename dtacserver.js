var express = require('express')
var app = express()

var d = Date.now();

var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var date =  day + "/" + month + "/" + year 

var card = {resultCode:0,
resultDesc:"Success",
requestID:"1",
responseID:"891212121",
responseDateTime:date,
providerNameID:"MOLPoints",
channelID:001,
faceValue:10
}

var cardfail = {resultCode:99,
resultDesc:"Fail",
requestID:"0",
responseID:"000000",
responseDateTime:date,
providerNameID:"",
channelID:0,
faceValue:0
}

app.get('/CashCardGameOnline/rest/Card/:serialnumber', function(req, res){
  var id = req.params.serialnumber;


//   if(!req.body.requestID || req.body.requestID==''){
//     res.status(500).send('need field `requestID`');
//     return null
//   }
// if(!req.body.requestDateTime || req.body.requestDateTime==''){
//     res.status(500).send('need field `requestDateTime`');
//     return null
//   }
// if(!req.body.voucherNo || req.body.voucherNo==''){
//     res.status(500).send('need field `voucherNo`');
//     return null
//   }
// if(!req.body.channelID || req.body.channelID==''){
//     res.status(500).send('need field `channelID`');
//     return null
//   }
// if(!req.body.providerNameID || req.body.providerNameID==''){
//     res.status(500).send('need field `providerNameID`');
//     return null
//   }




 if (id == card.requestID)
{
//   if (req.body.providerNameID = card.providerNameID)
 //{
res.json(card);
// }
// else
// {
// 	res.json(cardfail);
// }


}
else{
	res.json(cardfail);
}

console.log(id);
console.log(card.requestID);



  //card = cards.slice(parseInt(id)-1,1)
  //console.log('getCard '+ id);
  //res.json(card);
});




var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})





