const express = require("express");
const userController = require('../controllers/userController');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth');

module.exports = router;

router.post('/sign-in', userController.signIn);