const userService = require("../services/userService");
const ErrorCreator = require("../middlewares/errorCreator");

const userSignupController = async (req, res) => {
  const userData = req.body;
  await userService.userSignupService(userData);
  res.status(200).json({ message: "user created" });
};

module.exports = { userSignupController };
