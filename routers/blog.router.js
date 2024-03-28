const { getAllBlogs, createBlogs, getAllBlogs2, createBlogs2, getAllBlogs3 } = require('../controller/Blogs.controller');
const { studentmodel, mendormodel } = require('../models/Blog.model');


const BlogRouter=require('express').Router();

/* get student*/
BlogRouter.get("/student", async (req, res) => {
  let getstudentdata;
  try {
    getstudentdata = await getAllBlogs(req, res);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    message: "student data get successfully",
     data: getstudentdata,  
  });
});

/* get mentor */

BlogRouter.get("/mendors", async (req, res) => {
  let mendordata;
  try {
    mendordata = await getAllBlogs2(req, res);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    message: "mendor data get successfully",
     data: mendordata,  
  });
});
/* select mentor */
BlogRouter.get("/selectmendor", async (req, res) => {
  let mendordata;
  try {
    mendordata = await getAllBlogs3(req, res);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    message: "mendor data get successfully",
     data: mendordata,  
  });
});

    /* create student data */
BlogRouter.post("/studentdata", async (req, res) => {
    try {
      const datastudent = await createBlogs(req);
      if (datastudent && datastudent._id) {
        return res.status(200).json({
          message: "student data Created successfully",
          success: true,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: error,
        success: false,
      });
    }
  });
/* create mendor data */
  BlogRouter.post("/mendorsdata", async (req, res) => {
    try {
      const mendor = await createBlogs2(req);
      if (mendor && mendor._id) {
        return res.status(200).json({
          message: "mendor data Created successfully",
          success: true,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: error,
        success: false,
      });
    }
  });

/* Assign or change Mentor for Student -- select one student and assign one mentor */
  BlogRouter.patch('/assignmentor/:id',async (req,res) => {
    const {id} = req.params;
    const {mentor} = req.body;
    try{
        const student = await studentmodel.findById(id);
        student.mentor = mentor;
        await student.save();
        res.send(student);
    }catch(err){
        res.status(500);
        res.send(err);
    }
})

/* select one mentor and add to multiple students */

BlogRouter.patch('/assign-mentor-students', async (req,res) => {
  const {mentor,stud_list} = req.body;
  console.log(stud_list)
  try{
      stud_list.map( async (stud_id) => {
          const student = await studentmodel.findById(stud_id)
          student.mentor = mentor;
          await student.save();
      })
      res.send("Updated Successfully");  
  }catch(err){
      res.status(500);
      res.send(err);
  }
})
/* show all students for a particular mentor */
BlogRouter.get('/mentor-students/:id',async (req,res) => {
  const {id} = req.params;
  try{
      const students = await studentmodel.find({mentor : id});
      res.send(students);
  }catch(err){
      res.send(err);
  }
})

/* get mentor based on ID */
BlogRouter.get('/get-mentor/:id',async (req,res) => {
  const {id} = req.params;
  try{
      const mentor = await mendormodel.findById({_id : id})
      res.status(200).send(mentor);
  }catch(err){
      res.status(500);
      res.send(err);
  }
})

module.exports=BlogRouter;







