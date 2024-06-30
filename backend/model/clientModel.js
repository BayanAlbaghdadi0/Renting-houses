const mongoose = require("mongoose");

const clientmodel = mongoose.Schema(
  {
    
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    address: { type: String, require: true },
    phone: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);
const client = mongoose.model("client", clientmodel);
module.exports = client ;
