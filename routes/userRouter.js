const express = require("express");
const errorHandler = require("../middlewares/errorHandler");
const userController = require("../controllers/userController");

const router = express.Router();
const { authMiddleware } = require("../middlewares/auth");

router.post("", errorHandler(userController.userSignupController));
router.post('/sign-in', errorHandler(userController.signIn));
router.patch("", authMiddleware, errorHandler(userController.changeUserData));

module.exports = router;