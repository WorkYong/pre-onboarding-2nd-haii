const hospitalService = require("../services/hospitalService");
const xlsxWriter = require("../utils/xlsxWriter");
const ErrorCreator = require("../middlewares/errorCreator");

const hospitalDataController = async (req, res) => {
  const user = req.user;
  if (user.isAdmin === 0) {
    throw new ErrorCreator("Unauthorized users", 400);
  }

  const recordData = req.body.records;
  if (!recordData || !recordData[0] || !recordData[0].치매센터명) {
    throw new ErrorCreator("Request data Empty, Please check data", 400);
  }
  await hospitalService.hospitalDataService(recordData);
  res.status(200).json({ message: "success" });
};

const getHospitalDataController = async (req, res) => {
  const reqQuery = req.query;
  const {userId, isAdmin, provinceId } = req.user;

  const hospitalData = await hospitalService.getHospitalDataService(isAdmin, provinceId, reqQuery);

  res.status(200).json({data: hospitalData});
};

const downloadHospitalDataController = async (req, res) => {
  const reqQuery = req.query;
  const {userId, isAdmin, provinceId } = req.user;

  const hospitalData = await hospitalService.getHospitalDataService(isAdmin, provinceId, reqQuery);

  await xlsxWriter.writeExcelFile(hospitalData);

  res.status(200).json({message: "success"});
};

module.exports = { 
  hospitalDataController,
  getHospitalDataController,
  downloadHospitalDataController
};