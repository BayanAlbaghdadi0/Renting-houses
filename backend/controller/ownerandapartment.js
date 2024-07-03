const Owner = require("../model/ownerModel");
const Apartment = require("../model/Apartment");

const updateownerandAppartment = async (req, res) => {
    try {
    const imgArray = req.files.map(file => file.originalname)

      const { id } = req.params;
      const {
        apartmentprice,
        apartmentdescription,
        appartmentLocation,
      
        appartmentarea,
        countRoom,
        FloorHight,
        ownerid,
      } = req.body;
  
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
      
      res.json(updatedAppartment);
    } catch (error) {
      res.status(500).json({ message: "حدث خطأ أثناء تعديل بيانات الشقة." });
    }

    try {
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
      
        return updatedOwner;
      } catch (error) {
        console.log(error);
        throw error;
      }
  };
  