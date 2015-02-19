request = require('request-json');

var client = request.createClient('http://localhost:3000');

var data = {
	serialnumber:'111111111111111',
	merchantid:'1',
	securecode:'1',
	reference_number:'1',
	request_date:'1',
	request_type:'',
	Ref1:'1',
	Ref2:'1'
};

console.log('Hello');

client.post('/1.0/paynow/cashcard/1',data, function(err, res, body) {
	console.log(res.statusCode);
    if(res.statusCode == 200){
    	console.log(body);
    }else{
       console.log('error', res.statusCode);
     }

});