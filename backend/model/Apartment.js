const mongoose = require("mongoose");

const apartmentModel =  mongoose.Schema(
  {
   
 apartmentprice: {type:Number,
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
ownerid:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'Owner',
},


  },{
   timestamps:true
  }

);
const appartment = mongoose.model("appartment", apartmentModel);
module.exports = appartment;

