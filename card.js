

var request = require('request')
var async = require('async');
var hostDtac = "http://localhost:3001";
var cardValue = 0

createCard  = function (req, response) 
{
	console.log("read")

	  console.log(req);
	  //req.form
};

function getDatetime(){
	var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var hour = currentDate.getHours()
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    var date =  year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" +seconds
    return date;
}

getCard = function (reqest1, response) 
{

    console.log('Receive json object,')
	console.log(reqest1.body)


//---------------------------  Start check ----------------------------
	var id = reqest1.params.id;
	var tasks = []
	var ResData = []
    var check = []
    var return_msg = []
	var check_status = 200
	var requestDate = getDatetime();
	var res_data = {}
	var return_msg2  = {
		    returncode:check_status,
		    return_Message:"",
			transactionNumber:"",
    		transactionDate:"",
    		transactionStatus:"",
    		cardserialnumber:"",
    		CardValue:"",
    		Currency:"",
    		requestDate:"",
    		responseDate:""
	}
	var responseDate
	check.push(function(callback)
		{

	if(!reqest1.body.serialnumber || reqest1.body.serialnumber==''){
		check_status = 500;
		return_msg.push("1. need field serialnumber");
    }
    else{
    	if(reqest1.body.serialnumber.length > 15){
			return_msg.push("1. serialnumber max 15");
		}
		else{//-------- procress --------
		}
    }

    if(!reqest1.body.merchantid || reqest1.body.merchantid==''){
		check_status = 500;
		return_msg.push("2. need field merchantid");
    }
    else{
    	if(reqest1.body.merchantid.length > 10){
			return_msg.push("2. merchantid max 10");
		}
		else{//-------- procress --------
		}
    }

    if(!reqest1.body.securecode || reqest1.body.securecode==''){
		ccheck_status = 500;
		return_msg.push("3. need field securecode");
    }
    else{
    	if(reqest1.body.securecode.length > 50){
			return_msg.push("3. securecode max 50");
		}
		else{//-------- procress --------
		}
    }


    if(!reqest1.body.reference_number || reqest1.body.reference_number==''){
	check_status = 500;
		return_msg.push("4. need field reference_number");
    }
    else{
    	if(reqest1.body.reference_number.length > 15){
			return_msg.push("4. reference_number max 15");
		}
		else{//-------- procress --------
		}
    }


    if(!reqest1.body.request_date || reqest1.body.request_date==''){
	check_status = 500;
		return_msg.push("5. need field request_date");
    }
    else{//-------- procress --------
    }


    if(!reqest1.body.request_type || reqest1.body.request_type==''){
	     //check_status = 500;
		//return_msg.push("6. need field request_type");
		reqest1.body.request_type = "json"
    }
    else{//-------- procress --------
    }



    if(!reqest1.body.Ref1 || reqest1.body.Ref1==''){
	// check_status = 500;
	// 	return_msg.push("7. need field Ref1");
    }
    else{
    	if(reqest1.body.Ref1.lenght > 50){
			return_msg.push("7. Ref1 max 50");
		}
		else{//-------- procress --------
		}
    }


    if(!reqest1.body.Ref2 || reqest1.body.Ref2==''){
	// check_status = 500;
	// 	return_msg.push("8. need field Ref2");
    }
    else{
    	if(reqest1.body.Ref2.lenght > 50){
			return_msg.push("8. Ref2 max 50");
		}
		else{//-------- procress --------
		}
    }
callback()
});

check.push(function(callback)
		{
	responseDate = getDatetime();
 // 		return_msg2 = {
 //    		transactionNumber:"",
 //    		transactionDate:"",
 //    		transactionStatus:"",
 //    		cardserialnumber:"",
 //    		CardValue:"",
 //    		Currency:"",
 //    		requestDate:requestDate,
 //    		responseDate:responseDate
 //    	}
 		return_msg2.returncode=check_status;
        return_msg2.return_Message=return_msg;
    	return_msg2.requestDate=requestDate;
    	return_msg2.responseDate=responseDate;
     	callback()
});

check.push(function(callback)
		{
			console.log(check_status);
    if(check_status == 200){
// 			return_msg2 = {
//     		transactionNumber:"xxx",
//     		transactionDate:"xxx",
//     		transactionStatus:"xxx",
//     		cardserialnumber:"xxx",
//     		CardValue:"xxx",
//     		Currency:"xxx",
//     		requestDate:requestDate,
//     		responseDate:responseDate
//     	}

		return_msg2.returncode=check_status;
        return_msg2.return_Message=return_msg;
    	return_msg2.transactionNumber="xxx";
    	return_msg2.transactionDate="xxx";
    	return_msg2.transactionStatus="xxx";
    	return_msg2.cardserialnumber="xxx";
    	return_msg2.CardValue="xxx";
    	return_msg2.Currency="xxx";
    	return_msg2.requestDate=requestDate;
    	return_msg2.responseDate=responseDate;
    }
    callback()
});

check.push(function(callback)
		{

    res_data = return_msg2;
    return response.json(res_data); 
    callback() 
    }); 


async.waterfall(check ,function(err, result){
	  	console.log('done!')
});
    //---------------------------  End check ----------------------------

		// Task 1
		tasks.push(function(callback)
		{
			console.log('Task 1 request dtac')
		  	request.get(hostDtac+'/CashCardGameOnline/rest/Card/' + id, function(req, res, body)
		  	{
	    		var info = JSON.parse(body);
	    		console.log('faceValue is' + info.faceValue);
	    		//console.log('555');
	    		cardValue = info.faceValue;
	    		console.log(cardValue);
	    		callback()
	  		});
		});

		// Task 2
		tasks.push(function(callback)
		{
		  	console.log('Task 2 create object')
		  	ResData = {returncode:"0", 
	        returndescription:"Success",
	        transaction:id,
	        transactionDate:"2014/02/18 12:30:23:456",
	        transactionstatus:"Success",
	        cardserialnumber:"88888888",
	        cardvalue:cardValue,
	        currencycode:"THB"
	        };

	       	//console.log(cardValue);
	       	//console.log('Transaction number ::'+ id);
	  		console.log(ResData);
	  		

	  		callback()
		});

		async.waterfall(tasks ,function(err, result){
	  	console.log('done!')
	});


};


  //variable for exports
var plugin = {}
plugin.get = getCard
plugin.create = createCard

// exporting
module.exports = plugin
