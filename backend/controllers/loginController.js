const USER = require("../models/user");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email: email });
  console.log(user);
//   console.log("user password", user.password)
  if (user) {
    if (user.password === password) {
      
      return res
        .status(200)
        .json({ msg: "logged in successfully", success: true });
    } else {
      return res
        .status(404)
        .json({ msg: "password didn't matched", success: false ,password:false });
    }
  }

  res.status(404).json({ msg: "can't login user not found", success: false });
};

module.exports = login;
