//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var URL = process.env.DATABASEURL || "mongodb://localhost/todoapp";
MongoClient.connect(URL,(error,db)=>{
    if(error){
        return console.log("Unable to connect to mongodb");
    }
    console.log("connected to mongodb");
    
/*    db.collection("Todos").insertOne({
        text:'some thing to do',
        completed:false
    },(error,result)=>{
       if(error){
           return console.log("Unable to insert to db", error);
       } 
       console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    //insert new doc into Users(name,age, location)
   /* db.collection("Users").insertOne({
        name:"Ben",
        age:40,
        location:"Seattle"
    },(error,result)=>{
        if(error){
            return console.log("can't insert",error);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    })*/
    db.close();
});