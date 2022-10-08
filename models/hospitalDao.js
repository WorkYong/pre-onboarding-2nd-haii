const { myDataSource } = require("./common");

const createHospital = async (data) => {
  await myDataSource.query(
    `INSERT INTO hospitals
      (name,type_id,street_address,address,latitude,longitude,establishment,area,facility,doctor,nurse,social_worker,
      extra_people,operator,representative,operator_contact,trust,data,management_contact,management,standard_date,province_id)
     VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `,
    [
      data.치매센터명,
      data.치매센터유형,
      data.소재지도로명주소,
      data.소재지지번주소,
      data.위도,
      data.경도,
      data.설립연월,
      data.건축물면적,
      data.부대시설정보,
      data.의사인원수,
      data.간호사인원수,
      data.사회복지사인원수,
      data.기타인원현황,
      data.운영기관명,
      data.운영기관대표자명,
      data.운영기관전화번호,
      data.운영위탁일자,
      data.주요치매관리프로그램소개,
      data.관리기관전화번호,
      data.관리기관명,
      data.데이터기준일자,
      data.제공기관명,
    ]
  );
};

const getAllHospitalData = async () => {
  return await myDataSource.query(
    `SELECT * FROM hospitals;`
  );
};

const getHospitalData = async (provinceId) => {
  return await myDataSource.query(
    `SELECT * FROM hospitals
    WHERE province_id = ?;
    `,[provinceId]
  );
};

module.exports = { 
  createHospital,
  getHospitalData,
  getAllHospitalData
};