const express = require("express");
const errorHandler = require("../middlewares/errorHandler");
const hospitalController = require("../controllers/hospitalController");

const router = express.Router();

router.post("", errorHandler(hospitalController.hospitalDataController));
router.get("", errorHandler(hospitalController.getHospitalDataController));

module.exports = router;
