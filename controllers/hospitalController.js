const hospitalService = require("../services/hospitalService");

const hospitalDataController = async (req, res) => {
  const recordData = req.body.records;
  await hospitalService.hospitalDataService(recordData);
  res.status(200).json({ message: "success" });
};

const getHospitalDataController = async (req, res) => {
  // 유저분석. header Authorization으로 토큰확인
  //====페이로드예시===========
  const payLoad = {
    id: 1,
    is_admin: 1,
    province_id: null,
  }
  //=======================
  const {is_admin, province_id} = payLoad;

  const hospitalData = await hospitalService.getHospitalDataService(is_admin, province_id);

  res.status(200).json({data: hospitalData});
};

module.exports = { 
  hospitalDataController,
  getHospitalDataController
};
