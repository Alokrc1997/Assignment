const mongoose=require('mongoose');
const comment=require('./comment');

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    desc:{
        type:String,
        required:true
    },
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]

});

const blog=mongoose.model('Blog',blogSchema);

module.exports=blog;