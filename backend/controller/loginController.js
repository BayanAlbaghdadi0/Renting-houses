const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const client= require('../model/clientModel');
const generateTokenAndSetCookie=require('../utils/generateToken')


  function test(){
    console.log("test")
  }
async function login()  {
    const { username, password } = req.body;
  
    const user = client.find(user => user.username === username);
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
  
    generateTokenAndSetCookie(newUser._id, res)
  
    res.json({ token });
  };

  module.exports={login,test}