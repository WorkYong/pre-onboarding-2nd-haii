const userService = require("../services/userService");

const signIn = async (req, res) => {
  const { account, password } = req.body

  if (!account || !password ) {
    res.status(400).json({message: 'ENTER YOUR ID AND PASSWORD'})
  }
  const token = await userService.signIn(account, password)
  
  res.status(200).json({message: 'LOGIN_SUCCESS', token: token})

};

module.exports = {
  signIn,
};