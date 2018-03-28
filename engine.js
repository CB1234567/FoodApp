var mongodb = require('mongodb');// importing mongodb
var http  = require ('http');
var math = require('mathjs');
var MongoClient = mongodb.MongoClient;//creating a MongoClient
var arraySort = require('array-sort');
var Promise=require('promise');

var url = 'mongodb://localhost:27017/FApp';
var food_dist={};
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 450000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 450000 } }
};

MongoClient.connect(url, function(err,db){//connect to db
  if(err)
  {
    console.log(err);
  }
  else {
    var arr= {};

    console.log("connected to db");
    var Orders= db.collection("Orders");
    Orders.distinct("food_id",function(err,food){
      if(err)
      {
        console.log(err);
      }
      else {
        food_dist=food;
      console.log(food_dist);
   }//else
})
.then(function)Orders.find({"food_id":new RegExp(fid)}).sort({date:1, time:1}).toArray(function(mydoc,err){
    if(err)
    {
      console.log(err)
    }
    else {
      console.log("food_id is "+ fid);
      console.log(mydoc);
    }
  }););//distinct

  //   Orders.aggregate([ {$group:{_id:"$date", Time:{$push:"$$ROOT"} } } ],function(err,ord2){
  //     if(err)
  //     {
  //       console.log(err);
  //     }
  //     else {
  //     //console.log(ord2);
  //     var arr= [];
  //         arr= JSON.stringify(ord2[3].Time);
  //         //console.log(arraySort(arr, 'time'));
  //         for(var i=0;i<arr.length;i++)
  //         {
  //           if(arr.food_id=="F001")
  //           {
  //             console.log(arr[0].food_id)
  //           }
  //         }
  //         //console.log(arr);
  //         for(var i=0;i<ord2.Time;i++)
  //         {
  //           //console.log(JSON.stringify(ord2[i].Time  ));
  //           //console.log(food_dist[i])
  //           for(var j =0;j<arr.length;j++)
  //           {
  //             //if(food_dist[i]==arr[j].food_id)
  //           //  console.log(arr[j])
  //           }
  //         }//for
  //
  //
  //       ///  console.log(arr);
  //     }//else
  //   } );//aggregate
  }//else err in connection end
  db.close();
});//MongoClient connect close
