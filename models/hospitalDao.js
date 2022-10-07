const { myDataSource } = require("./common");

const createHospital = async (recordData) => {
  await myDataSource.query(
    `INSERT INTO hospitals 
      (name,type_id,street_address,latitude,longitude,establishment,area,facility,doctor,nurse,social_worker,
      extra_people,operator,representative,operator_contact,trust,data,management_contact,management,standard_date,city_id)
     VALUES()
    `
  );
};
