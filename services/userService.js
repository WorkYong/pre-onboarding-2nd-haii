const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDao = require("../models/userDao");
const secretKey = process.env.jwt_secret_key

const signIn = async (account, password) => {

    const user = await userDao.getUserByAccount(account)
    if (!user) {
      const err = new Error('INVAILD_ACCOUNT OR INVALID_PASSWORD')
      err.statusCode = 400
      throw err
    }
    
    const passwordCheck = bcrypt.compareSync(password, user.password)
  
    if (!passwordCheck) {
      const err = new Error('INVAILD_ACCOUNT OR INVALID_PASSWORD')
      err.statusCode = 400
      throw err
    }

    const token = jwt.sign(
        {
        userId: user.id , 
        isAdmin : user.is_admin, 
        provinceId : user.province_id}, secretKey,)
    
    return token

};    

module.exports = {
    signIn,
};
