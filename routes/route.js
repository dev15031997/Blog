const express=require("express")
const Router=express.Router();

Router.get('/',(req,res)=>{
    res.send('Hello there')
})

module.exports=Router;