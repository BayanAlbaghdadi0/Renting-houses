const Apartment = require("../model/Apartment");

const wellcome = (req, res) => {
  console.log("test");
  res.send("hi");
};

const createApartment = async (req, res) => {
  try {
    const {
      apartmentprice,
      apartmentdescription,
      appartmentLocation,
    
      appartmentarea,
      countRoom,
      ownerid,
      FloorHight
    } = req.body;
    const imgArray = req.files.map(file => file.originalname)
    const newApartment = new Apartment({
      apartmentprice: req.body.apartmentprice,
      apartmentdescription: req.body.apartmentdescription,
      appartmentLocation: req.body.appartmentLocation,
      img:imgArray,
      appartmentarea: req.body.appartmentarea,
      countRoom:req.body.countRoom,
      FloorHight:req.body.FloorHight,
      ownerid: req.body.ownerid,
    });
    console.log(newApartment);
    await newApartment.save();

    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create apartments" });
  }
};
// "668080a4574f82a6c3363d3e"


const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get apartments" });
  }
};

//res:
// {
//   "_id": "668136a358b3bd92577a803d",
//   "apartmentprice": 100000,
//   "apartmentdescription": "fucking apartment",
//   "appartmentLocation": "in the city ",
//   "img": [],
//   "ownerid": "668135eb716ea53e9e501131",
//   "createdAt": "2024-06-30T10:42:43.654Z",
//   "updatedAt": "2024-06-30T10:42:43.654Z",
//   "__v": 0
// },
// {
//   "_id": "66111111358b3bd92577a803d",
//   "apartmentprice": 100000,
//   "apartmentdescription": "jkl apartment",
//   "appartmentLocation": "kjhgfghjkcity ",
//   "img": [],
//   "ownerid": "668135eb716ea53e9e501131",
//   "createdAt": "2024-06-30T10:42:43.654Z",
//   "updatedAt": "2024-06-30T10:42:43.654Z",
//   "__v": 0
// }

const getApartmentById = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ error: "Apartment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//res:
// {
//   "_id": "668136a358b3bd92577a803d",
//   "apartmentprice": 100000,
//   "apartmentdescription": "fucking apartment",
//   "appartmentLocation": "in the city ",
//   "img": [],
//   "ownerid": "668135eb716ea53e9e501131",
//   "createdAt": "2024-06-30T10:42:43.654Z",
//   "updatedAt": "2024-06-30T10:42:43.654Z",
//   "__v": 0
// }

const updateApartmentById = async (req, res) => {
  try {
    const updatedApartment = await Apartment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedApartment) {
      res.json(updatedApartment);
    } else {
      res.status(404).json({ error: "Apartment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update apartment" });
  }
};

const deleteApartmentById = async (req, res) => {
  try {
    const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
    if (deletedApartment) {
      res.json({ message: "Apartment deleted successfully" });
    } else {
      res.status(404).json({ error: "Apartment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete apartment" });
  }
};

module.exports = {
  createApartment,
  getAllApartments,
  getApartmentById,
  updateApartmentById,
  deleteApartmentById,
  wellcome,
};
