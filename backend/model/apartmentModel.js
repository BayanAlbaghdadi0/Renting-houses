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
 img:{
   type:Array,
   default:[]
 },
 appartmentarea: {type:String,
   require: true,
},
clientId:{
   type:Number
}

  },{
   timestamps:true
  }

);
const appartment = mongoose.model("appartment", apartmentModel);
module.exports = {appartment};
