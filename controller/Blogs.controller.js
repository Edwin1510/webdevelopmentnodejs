const {studentmodel,mendormodel, } = require("../models/Blog.model");



function getAllBlogs(req,res) {
    return studentmodel.find({});

}
function getAllBlogs3(req,res) {
    return studentmodel.find({mentor:"66058cd8a677a48070a293e1"});

}

function createBlogs(req,res){
   const Blogs =new studentmodel(req.body);
   return Blogs.save()   
}
function getAllBlogs2(req,res) { 
    return mendormodel.find();

}
function createBlogs2(req,res){
    const Blogs =new mendormodel(req.body);
    return Blogs.save()   
 }

module.exports={
    getAllBlogs,
    createBlogs,
    getAllBlogs2,
    createBlogs2,
    getAllBlogs3,
   
};