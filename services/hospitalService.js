const hospitalDao = require("../models/hospitalDao");

const hospitalDataService = async (recordData) => {
  recordData.map((val) => {
    if (val.치매센터유형 === "치매안심센터") {
      val.치매센터유형 = 1;
    } else if (val.치매센터유형 === "광역치매센터") {
      val.치매센터유형 = 2;
    } else {
      val.치매센터유형 = 3;
    }
  });

  recordData.map((val) => {
    let name = val.제공기관명;
    switch (name) {
      case name.includes("서울특별시"):
        name = 1;

      case "경기도":
        name = 2;

      case name.includes("인천광역시"):
        name = 3;

      case "강원도":
        name = 4;
        break;
      case "충청남도":
        name = 5;
        break;
      case "충청북도":
        name = 6;
        break;
      case "대전광역시":
        name = 7;
        break;
      case "경상북도":
        name = 8;
        break;
      case "경상남도":
        name = 9;
        break;
      case "전라북도":
        name = 10;
        break;
      case "전라남도":
        name = 11;
        break;
      case "부산광역시":
        name = 12;
        break;
      case "울산광역시":
        name = 13;
        break;
      case "대구광역시":
        name = 14;
        break;
      case "광주광역시":
        name = 15;
        break;
      case "세종특별자치시":
        name = 16;
        break;
      case "제주특별자치도":
        name = 17;
        break;
    }
  });
  console.log(recordData[0]);
  // await hospitalDao.createHospital(recordData);
};

module.exports = { hospitalDataService };
