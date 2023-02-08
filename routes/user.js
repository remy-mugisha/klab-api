// const Post=require('../models/Posts');
const express = require ("express");
const UserController = require ("../controller/userController");
const router = express.Router();
const  validate  = require("../middleware/validate")
const verifyTokenAndRole  = require("../middleware/authentication");
const {registerVal, loginVal} = require ("../validation/userValidate");

// userRoute.get("/",verifyTokenAndRole,UserController.getAllUsers);
router.get("/all",verifyTokenAndRole,UserController.getAllUsers);
router.get("/:id",verifyTokenAndRole,UserController.getUser);
router.put("/:id",verifyTokenAndRole,UserController.updateUser);
router.delete("/delete/:id",verifyTokenAndRole,UserController.deleteUser);
router.post("/register",validate.validate(registerVal),UserController.register);
router.post("/login",validate.validate(loginVal),UserController.login);
module.exports = router;



