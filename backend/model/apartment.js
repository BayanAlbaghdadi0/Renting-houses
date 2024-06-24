const mongoose = require("mongoose");

const apartmentModel =  mongoose.Schema(
  {
   
 apartmentprice: {type:String,
    require: true,
 },
 apartmentdescription: {type:String,
    require: true,
 },
 appartmentLocation: {type:String,
    require: true,
 },
 appartmentarea: {type:String,
   require: true,
},
clientId:{
   type:String
}

  },

);
const Owner = mongoose.model("Owner", ownermodel);
module.exports = {Owner};
