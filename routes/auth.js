// const router=require('express').Router();
// const User=require('../models/User');
// const bcrypt=require('bcrypt');
// const {registerVal, loginVal} = require ("../validation/userValidate");
// const  validate  = require("../middleware/validate")
// const sign =  require ("../cloudinary/jwt");
// router.post('/register',async(req,res)=>{

//     try {
//         const salt=await bcrypt.genSalt(10);
//         const hashedPassword=await bcrypt.hash(req.body.password,salt );
//         const newUser=new User({
//             username:req.body.username,
//             email:req.body.email,
//             password:hashedPassword
//         });
//         const user=await newUser.save();
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })
// router.post('/login',async(req,res)=>{
    
//     try {
//         const user=await User.findOne({username:req.body.username});
//         if(!user){
//               return res.status(400).json("Wrong credentials");
//             }
//         const validated=await bcrypt.compare(req.body.password,user.password)
//        if(!validated){
//         res.status(400).json('Wrong credentials');
//        } 
//         const {password,...others} = user._doc;
//       res.status(200).json({message: 'Logged in'});
//      }
//       catch (error) {
//         console.error(error)
//         res.status(500).json(error)
//     }
// })

// router.post("/register",validate.validate(registerVal));
// router.post("/login",validate.validate(loginVal));

// module.exports = router;