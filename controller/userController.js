const bcrypt=require('bcrypt');
const User=require('../models/User');
const sign =  require ("../cloudinary/jwt");
exports.updateUser = async(req,res)=>{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt);
        }
        try {
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error)
        }
    }

exports.register = async(req,res)=>{

    try {
        const user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt)
        await user.save();
        res.status(201).json({status:"success",data:user});
      } catch (error) {
        res.status(500).json({status:"success", error: error.message });
      }
}

exports.login = async(req,res)=>{
    
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) return res.status(401).json({status:"fail",error:"Invalid credentials" });
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
          res.status(401).json({status:"error",error:"Invalid password" })
          return;
        }
        const accessToken = sign.sign({id:user._id,role:user.role})
        res.status(200).json({status:"success",data:user,token:accessToken});
  
      } catch (error) {
        res.status(500).json({status:"error", error: error.message });
      }
}

//delete
exports.deleteUser = async(req,res)=>{
    if(req.body.userId==req.params.id){
        try {
            const user=User.findById(req.params.id)
            try {
                await Post.deleteMany({username:user.username})
                await User.findByIdAndDelete(req.body.userId);
                res.status(200).json("User has been deleted");
            } catch (error) {
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(404).json("User not found!");
        }
    }
    else{
        res.status(401).json("You can only delete your account")
    }
}
//getting
exports.getUser = async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
};

     exports.getAllUsers = async(req, res)=> {
      try {
        const users = await User.find();
        res.status(200).json({status:"success",data:users});
      } catch (error) {
        res.status(400).json({status:"error",error:error.message});
      }
    };