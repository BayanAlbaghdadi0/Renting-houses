const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appatmentrouter = require("./route/appartmentRoute");
const loginrouter = require("./route/authRouter");
const filterrouter = require("./route/filterRoute");
const clientrouter = require("./route/clientRoute");
const ownerrouter = require("./route/ownerRoute");
const cors = require("cors");
const app = express();
require('dotenv').config();
// const secret=process.env.MY_SECRET
const port =5000

// const MONGO_URL = process.env.MONGO_URL

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
console.log(process.env.MONGO_URL)
const connectionDataBase = require("./db/connectDb");

app.use("/apartment", appatmentrouter);
app.use("/auth", loginrouter);
app.use("/filter", filterrouter);
app.use("/client", clientrouter);
app.use("/owner", ownerrouter);
app.listen(port, () => {
  connectionDataBase(process.env.MONGO_URL);
  console.log(`Server is running on http://localhost:${port}`);
});
