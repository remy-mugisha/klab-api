// const router=require('express').Router();
// const Image=require('../models/Image');
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage:multer.diskStorage({}),
    filename:(req,file,cb) =>{
        cb(null,file.originalname)  
    },
    fileFilter:(req,file,cb) =>{
        let extention = path.extname(file.originalname);
        if(!extention === '.jpg' && !extention === '.jpeg' && extention === '.png'){
            cb(new Error('Unsupported file!',false));
            return;
        }
        cb(null,true);
    }
});
module.exports=upload;

// const  modelName  = require('../models/User');
 
//storage
// const Storage = multer.diskStorage({
//     destination: 'uploads', 
//     filename: (req, file, cb)=>{
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({
//     storage: Storage
//     // limits{
//     //     fileSize: 1024* 1024* 3*,
//     // },
// }).single('image');
// path.post('/upload', (req, res)=>{
//     upload(req, res,(err)=>{
//         if(err){
//             console.log(err);
//         }else{

//             const newImage = new Image({
//                 name: req.file.filename,
//                 image:{
//                     data: req.file.filename,
//                     contentType: 'image/jpg'
//                 }
//             })
//             newImage.save()
//             .then()
//             .catch((err)=>console.log(err));
//            return res.send('successfully upload')
            
//         }
//     })
// })
// module.exports=router;