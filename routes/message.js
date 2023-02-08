const express = require ("express");
const MessageController = require ("../controller/messageController");
const router = express.Router();
const verifyTokenAndRole  = require("../middleware/authentication");

router.post("/create",MessageController.createMessage);
router.get("/",verifyTokenAndRole,MessageController.getAllMessage);
router.get("/:id",verifyTokenAndRole,MessageController.getMessage);
router.delete("/delete/:id",verifyTokenAndRole,MessageController.deleteMessage);
module.exports = router;