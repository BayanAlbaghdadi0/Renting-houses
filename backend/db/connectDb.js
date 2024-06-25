// import mongoose from "mongoose";
const mongoose = require("mongoose");

async function connectDB(MONGO_URL){
 


  mongoose.connect(MONGO_URL)
    .then(() => {
      console.log('done');
    
    })
    .catch(error => {
      console.error('error ', error);
    });
}

module.exports = connectDB;