const mongoose = require("mongoose");

const ownermodel = mongoose.Schema(
  {
    username: { type: String, require: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, require: true },
    RoomNumber: { type: Number, require: true },
    FloorNumber: { type: Number, require: true },
    City: { type: String, require: true },
    Salary: { type: Number, require: true },
    Area: { type: String, require: true },
    Descrebtion: { type: String, require: true },
    appartmentId: {
      type:String,
      ref:'appartment',
    },

  },
  {
    timestamps: true,
  }
);
const Owner = mongoose.model("Owner", ownermodel);
module.exports =  Owner ;
