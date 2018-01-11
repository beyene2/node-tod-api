//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var URL = process.env.DATABASEURL || "mongodb://localhost/todoapp";
MongoClient.connect(URL,(error,db)=>{
    if(error){
        return console.log("Unable to connect to mongodb");
    }
    console.log("connected to mongodb");
  /*  db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5a566f98d1c8dd150e6d66b9")
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });*/
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5a57bafe0b80e81d2529d37d")
    },{
        $set:{
            name:'Beyene'
        },
        $inc:{
            age:-1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });
    //db.close();
});