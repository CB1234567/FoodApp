var mongodb = require('mongodb');// importing mongodb
var MongoClient = mongodb.MongoClient;//creating a MongoClient

var url = 'mongodb://localhost:27017/FApp';

MongoClient.connect(url, function(err,db){

//  var db = client.db('FApp');
  if(err){
    console.log("Error");
  }
  else {
    console.log("connected to db "+ db);
    var collection=db.collection('Auth');
    //console.log(collection);
     collection.find().toArray(function(err,result){
       if(err){
         console.log(err);
       }
       else if (result.length) {
         console.log(result);

       }
       else {
         console.log("no result foound");
       }
       db.close();
});
}
});
