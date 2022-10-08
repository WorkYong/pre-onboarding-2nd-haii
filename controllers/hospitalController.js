const hospitalService = require("../services/hospitalService");

const hospitalDataController = async (req, res) => {
  const recordData = req.body.records;
  await hospitalService.hospitalDataService(recordData);
  res.status(200).json({ message: "success" });
};

module.exports = { hospitalDataController };
