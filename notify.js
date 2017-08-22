var FCM = require('fcm-push');
var date = require('date-and-time');
var serverKey = "AAAA_HDL6Nk:APA91bHh-oFyWMFylkaaNN6lGZt9xlNmbCWl7SjVCL3JtHuA8ozeRP_E_gUL9n7fLnWGzJswlziA1rkqJ3nBn9C03uB41RCv5vkt73JEZgCgUvhjyz9AwrE8oOhB8FGOsaKeOTEtvUua"
//var serverKey = 'AAAAQRbuc7A:APA91bGMZCCK0zS7CFaTUhI8bTMF_tgWn-gLTNefkUKZYP6zqWhAt2VI6TRGTEsCSjzdUFvFijMOnD2-ro9AbewUSOr5V7pAPqtbk5UIJGYW88GaT2wYHq11wUq6ZkFzK8HQGYKpOFSA';
//var serverKey = '';
var fcm = new FCM(serverKey);
var today = new Date();


var milliseconds = (new Date).getTime();
var messageValue = {
  to: '1eEjoGZGWg1s:APA91bGjxww6ZyKgXZmt6PnxNjjI8h7OrBxbXEocgVM92AM7hRqxD3G5hZ1UJ88x-Lm6L3u9USESYwReg5K2N_FzJjmO_t8zd4uPfVqlUh67p_i_GLI667ZS-eMExdQSq6DyQUI8HfHu',
  //  to: 'dMRLUkVZueA:APA91bHEDSise8pKJa5k5u7PbpzyuqdTzgurnND_S1tdGVN1sCvVRzLcOrGkicDNVC4cCXUVzyRU2PEKrT_qnEBJxtJnKJCCh3TDaknoCspaJSWuOg9OhAVqEc7lBREquuqPVCJesCx1',
    //to: 'euC_iT8wDLo:APA91bHSj3rp3plbuRSiaIB41ozq0wI0ybEc0CeLtdklWAC2cRRcqsBuI7_5ubvorOfrr4p4rmnfTmqdWjIXDdr3QZbNFIngPbCA8npzIYyWjVkDZ_SdXRW1xg-V7A6-CGfQ8FDc_HK1', // required fill with device token or topics
    collapse_key: 'your_collapse_key',
    data: {
        title : "Fcm Push",
        message :"Offer Message",
        is_background : "true",
        //image: "http://api.androidhive.info/images/firebase_logo.png",
        //timestamp : date.format(today, 'YYYY-MM-DD HH:mm:ss'),
        objectNote : '{replyTopicId:"148",description:"Reply notification",notificationType:1,userId:5}',
        notificationType : 1,
        topicId : 112
  },

    priority : 10
};
var jsonValue = JSON.stringify(messageValue);
  console.log("JsonValue!", jsonValue);
//callback style
// fcm.send(jsonValue, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!" +err);
//     } else {
//         console.log(messageValue);
//         console.log("Successfully sent with response: ", response);
//     }
// });

//promise style
fcm.send(messageValue)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })
