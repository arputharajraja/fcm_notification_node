var http = require('http');

var apn = require('apn');

var url = require('url');

var myPhone1="4e3f76c19a3dab7fda778c17f8d04cce57564e33eb8d8d2f5c73a70fa2e9987f";
//var myPhone1 = "4f0a44192cd7b9e2b2de61f0024757d175f1650ecf5306a4e4400e3914e6cafa";
//var myPhone2 = "dfb427b0681d754c5e45d39fdd5e2f842d41924ef376ffbc94c6c474d8496ce0";

var iosTokens=[];
//iosTokens.push(myPhone2);
iosTokens.push(myPhone1);



var note = new apn.Notification();



	
//note.expiry = Math.floor(Date.now() / 1000) + 3600;

note.badge = 1;

/*
 var tittle='Offer';
 if(tittle.toUpperCase()=='OFFER'){
 message.addData('title',"OR-OFFER!!!");
 message.addData('message',"You Have New Deals !!!!");
 message.addData('notificationtype','Offer');
 }else{
 message.addData('title',"OR-ORDER_STATUS");
 message.addData('message',"Your order #3453493 has been verified");
 message.addData('notificationtype','Normal');
 }
 
 */
var tittle='Offer';


//note.sound="notification-beep.wav";

var tittle='Offer';
if(tittle.toUpperCase()=='OFFER'){

var titledata="You Have New Deals !!!!";
note.alert = { "body" : titledata};
var payload = {"notificationtype":"Offer","message":titledata};

}
else{
    var titledata="Your order #3453493 has been verified";
    note.alert = { "body" : titledata};
    var payload = {"notificationtype":"Normal","message":titledata};
}
note.payload = {"payload":payload };
console.log(note.payload);
console.log("after payload");
note.device = iosTokens;

console.log("Note data "+note);
var callback = function(errorNum, notification){

    console.log('Error is: %s', errorNum);

    console.log("Note " + notification);

}

var options = {

    gateway: 'gateway.sandbox.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production

    errorCallback: callback,

    cert: 'aps_development.pem',

    key:  'aps_key.pem',

    passphrase: 'rabbit_123$',

    port: 2195,                       

    enhanced: true,                   

    cacheLength: 100                  

}

var apnsConnection = new apn.Connection(options);

apnsConnection.sendNotification(note);