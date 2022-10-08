const express = require("express");
const userRouter = require("../routes/userRouter");
const hospitalRouter = require("../routes/hospitalRouter");

const router = express.Router();

router.use("/users", userRouter);

router.use("/hospital", hospitalRouter);

module.exports = router;
