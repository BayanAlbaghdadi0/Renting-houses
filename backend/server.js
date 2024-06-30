const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const appatmentrouter= require('./route/appartmentRoute')
const loginrouter=require('./route/authRouter')
const filterrouter=require('./route/filterRoute')
const clientrouter=require('./route/clientRoute')
const ownerrouter=require('./route/ownerRoute')

const app = express();
require('dotenv').config();

const port =process.env.PORT||3000
const MONGO_URL = process.env.MONGO_URL
app.use(express.json());
const connectionDataBase = require('./db/connectDb');






app.use('/apartment',appatmentrouter)
app.use('/auth',loginrouter)
app.use('/filter',filterrouter)
app.use('/client',clientrouter)
app.use('/owner',ownerrouter)










connectionDataBase(MONGO_URL)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});