const express = require('express');
const app = express();
const port =7000;
const userRoute=require('./Routes/UserRoute')
const blogRoute=require('./Routes/blogRoute')
const mongoose = require('mongoose');
const Blog = require('./Models/blog');
const User = require('./Models/user');
app.set('view engine','ejs')

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/Blog",{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log("connection failed")
});

Blog.aggregate([{ 
    $lookup: {
     from: 'User',
     localField: 'userId',
     foreignField: '_id',
     as: 'userBlogs'
    }}])


app.use(express.urlencoded({extended:true}));
app.use('/user',userRoute);
app.use('/blog',blogRoute);
app.get('/test',(req,res)=>{
    res.render("view",{text:"hello"});
})

app.listen(port, () =>console.log(`listening on port ${port}`));