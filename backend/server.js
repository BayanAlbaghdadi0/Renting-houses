const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const appatmentrouter= require('./route/appartmentRoute')
const loginrouter=require('./route/authRouter')

const app = express();
require('dotenv').config();

const port =process.env.PORT||3000
const MONGO_URL = process.env.MONGO_URL
app.use(express.json());
const connectionDataBase = require('./db/connectDb');

app.use('/apartment',appatmentrouter)
app.use('/auth',loginrouter)

connectionDataBase(MONGO_URL)
app.listen(port, () => {
  console.log(`Server is running on port `);
});