var mongodb = require('mongodb');// importing mongodb
var http  = require ('http');
var MongoClient = mongodb.MongoClient;//creating a MongoClient

var url = 'mongodb://localhost:27017/FApp';
http.createServer(onrequest).listen(8080);

function onrequest(request, response){
MongoClient.connect(url, function(err,db){

//  var db = client.db('FApp');
  if(err){
    console.log("Error");
  }
  else {
    console.log("connected to db ");
    var collection=db.collection('Auth');
    //response.write(collection);
     collection.find().toArray(function(err,result){
       if(err){
         console.log(err);
       }
       else if (result.length) {
         response.write(JSON.stringify(result));
         response.end();
       }
       else {
         console.log("no result foound");
       }
       db.close();
});
}
});

}//on request
