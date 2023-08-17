const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user) {
    return res.json({
      message: "User alreafy exists!, You must use another username",
    });
  }
  if (!password || password.length < 8) {
    return res.json({ message: "Something wrong with pass" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User Registered successfully!" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ message: "User doesn't exist" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret");

  res.send({ token, userId: user._id });
};

const getUsers = async (_req, res) => {
  const result = await User.find({}) //.populate({ path: "links" });
  res.send(result);
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const result = await User.findById({ _id: id }) //.populate({ path: "links" });
  res.send(result);
};

const deleteAll = async (_req, res) => {
  res.send(await User.deleteMany());
};

module.exports = { register, getUsers, deleteAll, login, getUser };
