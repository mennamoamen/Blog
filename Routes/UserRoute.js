const express = require('express');
const route = express.Router();
const userController= require('../Controllers/userController');
const path=require('path');
const fs=require('fs');
route.use(express.urlencoded({extended:true}));

route.post("/register",userController.SignUp);

route.get('/profile/:id',async function(req,res)
{
   res.send("hellooo");
}
)

route.get('/',async function(req,res)
{
    res.sendFile(path.join(__dirname,'user.html'));
}
)

route.get('/login',async function(req,res)
{
    
    res.sendFile(path.join(__dirname,'login.html'));
}
)

route.post('/profile',userController.Login);



module.exports=route;