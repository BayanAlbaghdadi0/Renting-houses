const mongoose = require("mongoose");

const ownermodel = mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    phone: { type: Number, require: true },
  
 

  },
  {
    timestamps: true,
  }
);
const Owner = mongoose.model("Owner", ownermodel);
module.exports =  Owner ;
