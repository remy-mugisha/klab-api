const Message = require('../models/Message');
   exports.createMessage = async(req,res)=>{
    const newMessage=new Message({
                fullname:req.body.fullname,
                email:req.body.email,
                subject:req.body.subject,
                message:req.body.message
            });
        try {
            await newMessage.save();
            res.status(201).json({status:"success",data:newMessage});
        } catch (error) {
            res.status(400).json({status:"error", error:error.message});
        }
    }

    exports.deleteMessage = async(req,res)=>{
        try {
            const sms = await Message.findById(req.params.id);
            if(!sms) return res.status(404).json({status:"fail",Message:"The message1 is not found"});
            await Message.findByIdAndDelete(req.params.id);
            res.status(200).json({status:"success",Message:"contact deleted"});
        } catch (error) {
            res.status(401).json({status:"error", error:error.message});
        }
    }

    exports.getAllMessage = async(req,res)=>{
        try {
            const Messages = await Message.find();
            res.status(200).json({status:"success",data:Messages});
        } catch (error) {
            res.status(400).json({status:"error",error:error.Message});
        }
    }

    exports.getMessage = async(req,res)=>{
        try {
            const sms = await Message.findById(req.params.id);
            if(!sms) return res.status(404).json({status:"fail",Message:"The message1 is not found"});
            res.status(200).json({status:"success",data:sms});
        } catch (error) {
            res.status(500).json({status:"error",error:error});
        }
    }