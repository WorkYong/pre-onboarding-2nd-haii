const express = require("express");
const errorHandler = require("../middlewares/errorHandler");
const { authMiddleware } = require("../middlewares/auth");
const hospitalController = require("../controllers/hospitalController");

const router = express.Router();

router.post("", authMiddleware, errorHandler(hospitalController.hospitalDataController));

module.exports = router;
