const Blog = require("../models/Posts");
const cloudinary = require ("../cloudinary/cloudinary");

     exports.getAllBlogs = async(req, res)=> {
        try {
          const blogs = await Blog.find();
          res.status(200).json({status:"success",data:blogs});
        } catch (error) {
          res.status(404).json({status:"error",error:error.message});
        }
      }

    exports.getBlog = async(req,res)=>{
        try {
            const blog = await Blog.findById(req.params.id);
            res.status(200).json({status:"success",data:blog});
        } catch (error) {
            res.status(401).json({status:"error",error:error.message});
        }
    }
    exports.createBlog = async(req,res)=>{
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const blog = new Blog({
                title:req.body.title,
                desc:req.body.desc,
                image:result.secure_url
            });
            await blog.save();
            res.status(201).json({status:"success",data:blog});
        } catch (error) {
            res.status(401).json({status:"error",error:error.message});
        }
    }

    exports.updateBlog = async(req, res)=> {
        try {
          const blog = await Blog.findById(req.params.id);
          if(!blog) return res.status(404).json({status:"fail",error:"The blog is not found"})
          await cloudinary.uploader.destroy(blog.image);
          const result = await cloudinary.uploader.upload(req.file.path);
          const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title ? req.body.title : blog.title,
            description:req.body.description ? req.body.description : blog.description,
            image:result.secure_url
          }},{new:true});
          res.status(200).json({
            status:"success",
            data:updatedBlog
          });
        } catch (error) {
          res.status(500).json({status:"error", error: error.message });
        }
      }
    

    exports.deleteBlog = async(req,res)=>{
        try {
          await Blog.findByIdAndDelete(req.params.id);
          res.status(200).json({status:"success",data:null,message:"the blog deleted"});  
        } catch (error) {
            res.status(401).json({status:"error",error:error.message})
        }
    }