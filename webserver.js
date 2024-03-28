const express=require('express');
const WEB_SERVER=express();


WEB_SERVER.get("/",(req,res)=>{
    res.render("pages/index");
    });

    WEB_SERVER.get("/about",(req,res)=>{
      res.render("pages/about");
      });

      WEB_SERVER.get("/createblog",(req,res)=>{
        res.render("pages/createblog")
      })
      WEB_SERVER.get("/seba",(req,res)=>{
        res.render("pages/seba")
      })

      module.exports=WEB_SERVER;