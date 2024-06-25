// import mongoose from "mongoose";
const mongoose = require("mongoose");

async function connectDB(MONGO_URL){
 


 await mongoose.connect(MONGO_URL)
    .then(() => {
      console.log('connection with database is done');
    
    })
    .catch(error => {
      console.error('error ', error);
    });
}

module.exports = connectDB;