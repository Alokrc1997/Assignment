const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const methodOverride=require('method-override');

const seedDb = require('./seed');
const routeBlog=require('./Routes/blog');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));



mongoose.connect('mongodb://localhost/BlogApp',
 {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify:false
    })
    .then(()=>{
        console.log("Database connected Successfully");

    })
    .catch((err)=>{
        console.log("Database Connection Failed");
        console.log(err);
    });

   app.use(routeBlog);
  // seedDb();





app.listen(3000,()=>{
    console.log("Listening at port 3000");
})