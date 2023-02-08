const express = require("express");
const BlogController = require("../controller/postController");
const upload = require('../cloudinary/image');
const verifyTokenAndRole  = require("../middleware/authentication");


const router = express.Router();
router.post('/create',upload.single("image"),verifyTokenAndRole,BlogController.createBlog);
router.get('/',BlogController.getAllBlogs);
router.get('/:id',BlogController.getBlog);
router.delete('/delete/:id',verifyTokenAndRole,BlogController.deleteBlog);
router.put('/:id',upload.single('image'),verifyTokenAndRole,BlogController.updateBlog);
module.exports = router;