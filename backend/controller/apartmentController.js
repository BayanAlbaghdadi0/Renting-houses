const Apartment = require('../model/Apartment');

const wellcome=(req,res)=>{
 console.log("test")
 res.send("hi")
}

const createApartment = async (req, res) => {

  const apartmentData = [
    {
      "apartmentprice": "5000",
      "apartmentdescription": "Spacious apartment with a great view",
      "appartmentLocation": "New York",
      "img": ["image1.jpg", "image2.jpg"],
      "appartmentarea": "1000 sq ft",
      "clientId": 1234
    },
    {
      "apartmentprice": "3500",
      "apartmentdescription": "Cozy apartment in the heart of the city",
      "appartmentLocation": "San Francisco",
      "img": ["image3.jpg", "image4.jpg"],
      "appartmentarea": "800 sq ft",
      "clientId": 5678
    }
  ];
  
  try {
    
    const {
      apartmentprice,
      apartmentdescription,
      appartmentLocation,
      img,
      appartmentarea,
      clientId
    } = req.body;
    console.log(req.body); 
    const newApartment = new Apartment({
      apartmentprice: req.body.apartmentprice,
      apartmentdescription: req.body.apartmentdescription,
      appartmentLocation: req.body.appartmentLocation,
      img: req.body.img,
      appartmentarea: req.body.appartmentarea,
      clientId: req.body.clientId,
    });
    console.log(newApartment);
    await newApartment.save();

    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create apartments' });
  }
};
const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get apartments' });
  }
};


const getApartmentById = async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (apartment) {
      res.json(apartment);
    } else {
      res.status(404).json({ error: 'Apartment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get apartment' });
  }
};


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
      res.status(404).json({ error: 'Apartment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update apartment' });
  }
};


const deleteApartmentById = async (req, res) => {
  try {
    const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
    if (deletedApartment) {
      res.json({ message: 'Apartment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Apartment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete apartment' });
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