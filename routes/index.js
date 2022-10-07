const express = require("express");
const userRouter = require("../routes/userRouter");
const hospitalRouter = require("../routes/hospitalRouter");

const router = express.Router();

router.use("/users", userRouter);
//24시간뒤 api 이용바람
router.use("/external-data-api", hospitalRouter);

module.exports = router;
