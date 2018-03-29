var mongodb = require('mongodb');// importing mongodb
var http  = require ('http');
var math = require('mathjs');
var MongoClient = mongodb.MongoClient;//creating a MongoClient
var arraySort = require('array-sort');
var Promise=require('promise');
var arr[]=['08:00:00','08:15:00','08:30:00','08:45:00','09:00:00','09:15:00']
var url = 'mongodb://localhost:27017/FApp';
var food_dist=[];
var FoodIsHere = false;
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 450000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 450000 } }
};

MongoClient.connect(url).then(function(db){
  var Orders = db.collection("Orders")
  Orders.distinct("food_id").then(function(fid) {
  for(var i=0; i<fid.length; i++){
    console.log(fid[i])
    Orders.find({"food_id":new RegExp(fid[i])}).sort({date:1, time:1}).toArray().then(function(mydoc){
      for(var slot=0;slot<126;slot++){
        var hr = slot/4;
        var min = (slot%4)*15;
        //slots 
      }
    });
  }
  db.close()
})
});//MongoClient connect close
