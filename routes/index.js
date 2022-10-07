const express = require("express");
const userRouter = require("../routes/userRouter");

const router = express.Router();

router.use("/users", userRouter);

module.exports = router;
