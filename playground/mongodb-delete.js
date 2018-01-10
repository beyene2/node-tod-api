//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var URL = process.env.DATABASEURL || "mongodb://localhost/todoapp";
MongoClient.connect(URL,(error,db)=>{
    if(error){
        return console.log("Unable to connect to mongodb");
    }
    console.log("connected to mongodb");
   /*   db.collection("Todos").deleteMany({text:"some thing to do"}).then((result)=>{
            console.log(result);
        });*/
   /* db.collection("Todos").deleteOne({text:"some thing to do"}).then((result)=>{
        console.log(result);
    });*/
/*    db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });*/
    //db.collection("Users").deleteMany({name:'Ben'});
    db.collection("Users").findOneAndDelete({
        _id:ObjectID('5a56753f5f659b15cbc2a4a3')
        
    }).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });
    
    //db.close();
});