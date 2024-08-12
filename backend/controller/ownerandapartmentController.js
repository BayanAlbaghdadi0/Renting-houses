const Owner = require("../model/ownerModel");
const Apartment = require("../model/Apartment");
const getownerbyid = async (req, res) => {
  const id = req.params
  console.log(id);

    return Owner.findById(id)
      .then((owner) => {
        return owner;
      })
      .catch((error) => {
        throw error;
      });
  };

const updateownerandAppartment = async (req, res) => {
  const imgArray = req.files.map((file) => file.originalname);
  try {
    const { id } = req.params;
    const existingOwner = await Owner.findOne(id);
    console.log(existingOwner);
    if (existingOwner) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
    const {
      username,
      email,
      phoneNumber,
      RoomNumber,
      FloorNumber,
      City,
      Salary,
      Area,
      Descrebtion,
    } = req.body;
    const updatedOwner = await Owner.findByIdAndUpdate(
      id,
      {
        username,
        email,
        phoneNumber,
        RoomNumber,
        FloorNumber,
        City,
        Salary,
        Area,
        Descrebtion,
      },
      { new: true }
    );
    res.json(updatedOwner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating owner" });
  }
};

const deletownerandapartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOwner = await Owner.findByIdAndDelete(id);
    if (deletedOwner) {
      res.json({ message: "Owner deleted successfully" });
    } else {
      res.status(404).json({ message: "Owner not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting owner" });
  }
};

module.exports = { updateownerandAppartment, deletownerandapartment,getownerbyid };
