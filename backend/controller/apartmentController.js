const Apartment = require('../models/apartmentModel');

const wellcome=(req,res)=>{
 console.log("test")
}
const createApartment = async (req, res) => {
  try {
    const newApartment = await Apartment.create(req.body);
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create apartment' });
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