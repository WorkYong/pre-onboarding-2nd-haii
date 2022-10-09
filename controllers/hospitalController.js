const hospitalService = require("../services/hospitalService");
const xlsxWriter = require("../utils/xlsxWriter");

const hospitalDataController = async (req, res) => {
  const recordData = req.body.records;
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