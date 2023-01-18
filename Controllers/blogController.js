const Blog = require('../Models/blog');
const User = require('../Models/user');


let addBlog=async(req,res)=>{
    let blog= new Blog({
        title:req.body.title,
        body:req.body.data,
        userId:req.params.id
        
    })
   
  try{
    blog = await blog.save();
   
     let id=req.body.id;
     User.updateOne({_id:id},{push : {blogs :blog}});
  
    

    res.send("blog created");
  }
  catch(e){
    console.log(e)

    res.send("failed")
  }
    }

// let pushBlog =  function(){
// let blog = addBlog()
//   let id= req.params.id
// User.updateOne({_id:id},{$push : {blogs :blog}});
// }
    let getBlog = async (req,res)=>{
        let id= req.params.id
        let data = await Blog.findById({_id:id}).populate('userId');
    console.log(id);
        res.send(data);
    }


module.exports={addBlog,getBlog};