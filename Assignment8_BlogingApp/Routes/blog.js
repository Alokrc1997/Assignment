const express=require('express');
const route=express.Router();
const Comment=require('../Models/comment');
const blogModule=require('../Models/blog')

route.get('/blogs',async(req,res)=>{
    const allBlogs= await blogModule.find({});
    res.render('./blogs/index',{allBlogs});
});

route.get('/blogs/new',(req,res)=>{
    res.render('./blogs/new');
  
});

route.post('/blogs',async(req,res)=>{
    console.log(req.body.blog);
    await blogModule.create(req.body.blog);
    res.redirect('/blogs');

    
});

route.get('/blogs/:id/edit',async(req,res)=>{
    const blog=await blogModule.findById(req.params.id);
    res.render('./blogs/edit',{blog});

});

route.patch('/blogs/:id',async(req,res)=>{
    await blogModule.findByIdAndUpdate(req.params.id,req.body.blog);
    res.redirect(`/blogs/${req.params.id}`);

});

route.delete('/blogs/:id',async(req,res)=>{
    await blogModule.findByIdAndDelete(req.params.id);
    res.redirect('/blogs')
})

route.get('/blogs/:id',async(req,res)=>{

    const blog=await blogModule.findById(req.params.id).populate('comment');
    
    res.render('./blogs/show',{blog});

});

route.post('/blogs/:id/comments',async(req,res)=>{
    //const comment=req.body.comment;
    const bl=await blogModule.findById(req.params.id);
    const comment=new Comment(req.body);
    bl.comment.push(comment);
    await comment.save();
    await bl.save();
    res.redirect(`/blogs/${req.params.id}`);



    

})







module.exports=route;