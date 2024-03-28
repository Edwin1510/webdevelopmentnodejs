const mongoose = require("mongoose");

// STEP 1: CREATE A SCHEMA
const studentschema = mongoose.Schema({
  name : {
    type : String,
    required : true
},
batch : {
    type : String,
    required : true
},
mentor : {
    type : mongoose.Schema.Types.ObjectId,
    default : undefined,
    ref : 'Mentor'
    
}
})
const mendorschema = mongoose.Schema({
  name : {
    type : String,
    required: true
},
email : {
    type : String,
    required:true,
    unique: true
},
course : {
    type : String,
    required : true
}
})



const studentmodel = mongoose.model("student", studentschema);
const mendormodel = mongoose.model("mendor", mendorschema);

module.exports = {studentmodel,mendormodel}