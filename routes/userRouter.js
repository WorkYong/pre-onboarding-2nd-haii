const express = require("express");
const errorHandler = require("../middlewares/errorHandler");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("", errorHandler(userController.userSignupController));

module.exports = router;
