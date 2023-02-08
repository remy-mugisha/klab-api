const mongoose=require('mongoose');

const MessageSchema=new mongoose.Schema({
    fullname:{
        type:String,
      
    },
    email:{
        type:String,
       
    },
    subject:{
        type:String,
        
    },
    message:{
        type:String,
        
    }
},
{
    timestamps:true}
);

module.exports=mongoose.model('Message',MessageSchema);