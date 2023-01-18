const mongoose = require('mongoose');

const blogSchema=mongoose.Schema({
    title:String,
    body:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    
})

const blog=mongoose.model('Blog',blogSchema);

module.exports=blog;