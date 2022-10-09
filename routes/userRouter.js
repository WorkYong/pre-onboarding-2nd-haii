const express = require("express");
const userController = require('../controllers/userController');
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");
const { authMiddleware } = require('../middlewares/auth');

module.exports = router;

router.post('/sign-in', errorHandler(userController.signIn));