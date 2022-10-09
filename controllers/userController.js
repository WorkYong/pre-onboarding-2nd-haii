const userService = require("../services/userService");

const signIn = async (req, res) => {
  const { account, password } = req.body

  if (!account || !password ) {
    res.status(400).json({message: 'PLEASE CHECK ID AND PASSWORD'})
  }
  const token = await userService.signIn(account, password)
  
  res.status(200).json({message: 'LOGIN_SUCCESS', token: token})

};

const userSignupController = async (req, res) => {
  const userData = req.body;
  await userService.userSignupService(userData);
  res.status(200).json({ message: "user created" });
};

const changeUserData = async (req, res) => {
  const {user_id, name, phone_number, province_id} = req.body
  const {isAdmin} =  req.user;
  if(!isAdmin){
    res.status(403).json({message: "NOT_ADMIN"})
  }
  
  const haskey = {user_id:false, name:false, phone_number:false, province_id:false}; 
  const requireKey = Object.keys(haskey);

  Object.entries(req.body).forEach((keyValue) => {
  const [key, value] = keyValue;
  if (requireKey.includes(key) && value){
      haskey[key] = true;
  }
  })
  const haskeyArray = Object.entries(haskey);
  for(let i =0; i<haskeyArray.length;i++){
  const [key, value] = haskeyArray[i];
  if(!value){
      res.status(400).json({ message: `${key} 이/가 없습니다` })
      return;
  }
  }

  const result = await userService.changeUserData( user_id, name, phone_number, province_id, isAdmin );
  res.status(203).json({user : result, message: "success_userUpdate" })

} 

module.exports = {
  signIn,
  userSignupController,
  changeUserData,
};
