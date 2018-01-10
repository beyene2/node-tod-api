//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var URL = process.env.DATABASEURL || "mongodb://localhost/todoapp";
MongoClient.connect(URL,(error,db)=>{
    if(error){
        return console.log("Unable to connect to mongodb");
    }
    console.log("connected to mongodb");
    /*db.collection("Todos").find({
        _id:new ObjectID("5a4fe4cea72f9a117e7856b0")
        
    }).toArray().then((docs)=>{
        console.log(docs);
        console.log(JSON.stringify(docs,undefined,2));
    },(error)=>{
        if(error){
            console.log("unable to fetch", error);
        }
    })*/
    db.collection("Todos").find().count().then((count)=>{
        console.log(`todos count:${count}`);
    },(error)=>{
        if(error){
            console.log("unable to fetch", error);
        }
    })
    //db.close();
});