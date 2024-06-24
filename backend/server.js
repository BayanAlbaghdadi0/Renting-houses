const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
dotenv.config()

const connectDB = require('./db/connectDb');
const port = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

dotenv.config()

app.use(express.json());
  
console.log("hi")
const s="s"
const users = [
  {
    id: 1,
    username: 'user1',
    password: '$2b$10$0PZbZDmWZmWn8IbM3s2jG.2tFQr1xh3C6hUJ7y2jMfVg7x3I1zK8e' // Hashed password for 'password1'
  },
  {
    id: 2,
    username: 'user2',
    password: '$2b$10$0PZbZDmWZmWn8IbM3s2jG.2tFQr1xh3C6hUJ7y2jMfVg7x3I1zK8e' // Hashed password for 'password2'
  }
];

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ userId: user.id }, 'secret-key');

  res.json({ token });
});
  
connectDB(MONGO_URL)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});