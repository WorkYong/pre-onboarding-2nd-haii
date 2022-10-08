const ErrorCreator = require("../middlewares/errorCreator");
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
  const data = (recordData) => {
    const parsedData = recordData.map((val) => {
      if (!val.건축물면적) {
        val.건축물면적 = null;
      } else if (!val.치매센터명) {
        throw new ErrorCreator("not exist name", 400);
      } else if (!val.위도 || !val.경도) {
        throw new ErrorCreator("not exist latitude or longitude", 400);
      } else if (!val.설립연월) {
        throw new ErrorCreator("not exist establishment", 400);
      }
      let arr = Object.entries(val);
      let [province] = arr[22][1].split(" ");
      let num = arr[22][1];
      switch (province) {
        case "서울특별시":
          num = 1;
          break;
        case "경기도":
          num = 2;
          break;
        case "인천광역시":
          num = 3;
          break;
        case "강원도":
          num = 4;
          break;
        case "충청남도":
          num = 5;
          break;
        case "충청북도":
          num = 6;
          break;
        case "대전광역시":
          num = 7;
          break;
        case "경상북도":
          num = 8;
          break;
        case "경상남도":
          num = 9;
          break;
        case "전라북도":
          num = 10;
          break;
        case "전라남도":
          num = 11;
          break;
        case "부산광역시":
          num = 12;
          break;
        case "울산광역시":
          num = 13;
          break;
        case "대구광역시":
          num = 14;
          break;
        case "광주광역시":
          num = 15;
          break;
        case "세종특별자치시":
          num = 16;
          break;
        case "제주특별자치도":
          num = 17;
          break;
      }
      arr[22][1] = num;
      const obj = Object.fromEntries(arr);
      return obj;
    });
    return parsedData;
  };
  for (let i = 0; i < data(recordData).length; i++) {
    await hospitalDao.createHospital(data(recordData)[i]);
  }
};

module.exports = { hospitalDataService };
