const express = require("express");
const auth = require("../middlewares/auth");
const errorHandler = require("../middlewares/errorHandler");
const hospitalController = require("../controllers/hospitalController");

const router = express.Router();

router.post("", errorHandler(hospitalController.hospitalDataController));
router.get("", auth.authMiddleware, errorHandler(hospitalController.getHospitalDataController));
router.get("/download", auth.authMiddleware, errorHandler(hospitalController.downloadHospitalDataController));

module.exports = router;