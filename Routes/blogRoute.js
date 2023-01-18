const express = require('express');
const route = express.Router();
const blogController= require('../Controllers/blogController');
const path=require('path');
const fs=require('fs');
route.use(express.urlencoded({extended:true}));

route.post("/addblog",blogController.addBlog);



route.get('/',async function(req,res)
{
    res.sendFile(path.join(__dirname,'blog.html'));
}
)


route.get('/getblog/:id',blogController.getBlog)





module.exports=route;