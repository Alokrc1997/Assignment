const mongoose=require('mongoose');
   
const commentSchema= new mongoose.Schema({
    comment:{
        type:String,
    },
    user:{
        type:String,
        default:"USER"
    }
});

const comment= mongoose.model('Comment',commentSchema);

module.exports=comment;