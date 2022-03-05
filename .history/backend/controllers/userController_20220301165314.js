const registerUser = (reg, res) => {
  res.send('Register Route');
};

const loginUser = (reg, res) => {
  res.send('Login Route');
};

module.exports = {
  registerUser,
  loginUser,
};
