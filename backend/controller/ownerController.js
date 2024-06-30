const Owner = require("../model/ownerModel");


// {
//   "email": "user4@example.com",
//   "username": "user4",
//   "password": "password4",
//   "phone": 1234567890,
//   "appartmentId": "appartment4"
// }
const test=(req,res)=>{
  console.log("test")
  res.send("test")
}
const createOwner = async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: "Failed to create owner" });
  }
};


const getOwner = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    res.status(200).json(owner);
  } catch (error) {
    res.status(500).json({ error: "Failed to get owner" });
  }
};


const updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    res.status(200).json(owner);
  } catch (error) {
    res.status(500).json({ error: "Failed to update owner" });
  }
};


const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    res.status(200).json({ message: "Owner deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete owner" });
  }
};

module.exports={createOwner,getOwner,updateOwner,deleteOwner,test}