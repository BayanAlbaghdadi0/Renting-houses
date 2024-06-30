const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Client = require("../model/clientModel");
// const generateTokenAndSetCookie = require("../utils/generateToken");

function test() {
  console.log("test");
}async function login(req, res) {
  const { username, password } = req.body;
  console.log(password);
  const user = await Client.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ clientId: user._id }, process.env.MY_SECRET, { expiresIn: '5m' });

  res.cookie('token', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
  });

  res.json({ token });
}
module.exports = { login, test };
