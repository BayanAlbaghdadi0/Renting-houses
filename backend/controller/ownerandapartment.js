const Owner = require("../model/ownerModel");
const Apartment = require("../model/Apartment");

const updateownerandAppartment = async (req, res) => {
    try {
    const imgArray = req.files.map(file => file.originalname)

      const { id } = req.params;
   
  
      const updatedAppartment = await Apartment.findByIdAndUpdate(
        id,
        {

            apartmentprice: req.body.apartmentprice,
            apartmentdescription: req.body.apartmentdescription,
            appartmentLocation: req.body.appartmentLocation,
            img:imgArray,
            appartmentarea: req.body.appartmentarea,
            countRoom:req.body.countRoom,
            FloorHight:req.body.FloorHight,
            ownerid: req.body.ownerid,
        },
        { new: true }
      );
      
  

  
        const updatedOwner = await Owner.findByIdAndUpdate(
          id,
          {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
          },
          { new: true }
        );
      
      
      } catch (error) {
        console.log(error);
       
      }
    

  };
  