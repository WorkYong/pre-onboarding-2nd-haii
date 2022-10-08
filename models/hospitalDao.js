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
    `SELECT
      h.name AS 치매센터명,
      t.name AS 치매센터유형,
      h.street_address AS 소재지도로명주소,
      h.address AS 소재지지번주소,
      h.latitude AS 위도,
      h.longitude AS 경도,
      h.establishment AS 설립연월,
      h.area AS 건축물면적,
      h.facility AS 부대시설정보,
      h.doctor AS 의사인원수,
      h.nurse AS 간호사인원수,
      h.social_worker AS 사회복지사인원수,
      h.extra_people AS 기타인원현황,
      h.operator AS 운영기관명,
      h.representative AS 운영기관대표자명,
      h.operator_contact AS 운영기관전화번호,
      h.trust AS 운영위탁일자,
      h.data AS 주요치매관리프로그램소개,
      h.management_contact AS 관리기관전화번호,
      h.management AS 관리기관명,
      h.standard_date AS 데이터기준일자,
      p.name AS 제공기관명
    FROM hospitals AS h
    JOIN types AS t ON t.id=h.type_id
    JOIN provinces AS p ON p.id=h.province_id
    ;`
  );
};

const getHospitalData = async (provinceId) => {
  return await myDataSource.query(
    `SELECT
      h.name AS 치매센터명,
      t.name AS 치매센터유형,
      h.street_address AS 소재지도로명주소,
      h.address AS 소재지지번주소,
      h.latitude AS 위도,
      h.longitude AS 경도,
      h.establishment AS 설립연월,
      h.area AS 건축물면적,
      h.facility AS 부대시설정보,
      h.doctor AS 의사인원수,
      h.nurse AS 간호사인원수,
      h.social_worker AS 사회복지사인원수,
      h.extra_people AS 기타인원현황,
      h.operator AS 운영기관명,
      h.representative AS 운영기관대표자명,
      h.operator_contact AS 운영기관전화번호,
      h.trust AS 운영위탁일자,
      h.data AS 주요치매관리프로그램소개,
      h.management_contact AS 관리기관전화번호,
      h.management AS 관리기관명,
      h.standard_date AS 데이터기준일자,
      p.name AS 제공기관명
    FROM hospitals AS h
    JOIN types AS t ON t.id=h.type_id
    JOIN provinces AS p ON p.id=h.province_id  
    WHERE province_id = ?
    ;`,[provinceId]
  );
};

module.exports = { 
  createHospital,
  getHospitalData,
  getAllHospitalData
};