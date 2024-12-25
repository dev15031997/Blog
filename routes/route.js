const express=require("express")
const Router=express.Router();
const userController=require('../Controllers/userController')

Router.post('/register',userController.Register);

module.exports=Router;