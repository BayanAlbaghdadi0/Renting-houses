const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../model/clientModel");
require("dotenv").config();

function test(req,res) {
  console.log("test");
  console.log(process.env.MY_SECRET);
}
async function login(req, res) {
 
  const { username, password } = req.body;
console.log(req.body);
const user = await Client.findOne({ username });
console.log(user);
if (!user) {
  return res.status(404).json({ message: "User not found" });
}



const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
  return res.status(401).json({ message: "Invalid password" });
}

const token = jwt.sign({ clientId: user._id }, process.env.MY_SECRET, {
  expiresIn: "5m",
});

res.cookie("token", token, {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
});

return res.status(201).json({
  _id: user._id,
  username: user.username,
  email: user.email,
  phone: user.phone,
  role:user.role,
});
}
module.exports = { login, test };
