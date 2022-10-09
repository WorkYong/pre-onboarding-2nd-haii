const express = require("express");
const errorHandler = require("../middlewares/errorHandler");
const userController = require('../controllers/userController');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth');

module.exports = router;

router.post('/sign-in', errorHandler(userController.signIn));