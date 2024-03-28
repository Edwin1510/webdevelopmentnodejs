const mongoose=require('mongoose');

function connectToMongoDB(){
    mongoose.connect("mongodb://localhost:27017/datatype")
    .then((response)=>{
        console.log("Database cottection successfully");
    })
    .catch((error)=>{
        console.log(error)});
}

module.exports=connectToMongoDB;