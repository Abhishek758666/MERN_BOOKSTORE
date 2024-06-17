const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(401).json({ error: "email already exist" });
    }
    const createdUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    res.status(200).json({ createdUser });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordCompare = await bcrypt.compare(password, user.password);
    console.log(user, passwordCompare);

    if (!user || !passwordCompare) {
      return res.status(401).json({ error: "invalid credentials" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = { signUpUser, loginUser };
