const mongoose = require("mongoose");

const ownermodel =  mongoose.Schema(
  {
   
 username: {type:String,
    require: true,
 },
 password: {type:String,
    require: true,
 },
 phone: {type:Number,
    require: true,
 },
 phone: {type:Number,
   require: true,
},
appartmentId:{
   type:String
}
,role:{
   type:String,
   default:"user"
}
  },
  {
   timestamps:true
  }


);
const Owner = mongoose.model("Owner", ownermodel);
module.exports = {Owner};