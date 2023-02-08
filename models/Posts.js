const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
    }
},{
    timestamps:true}
);

module.exports=mongoose.model('Post',PostSchema);