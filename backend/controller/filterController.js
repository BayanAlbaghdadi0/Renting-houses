const Appartment=require('../model/Apartment')

const filteredApartmentsasarea=async (req, res) => {
    const { area } = req.query;
  
    try {
      const filteredApartments = await Appartment.find({ appartmentarea: area });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const filteraslocation=async (req, res) => {
    const { location } = req.query;
    
    try {
      const filteredApartments = await Appartment.find({ appartmentLocation: location });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

 const sortasprice= async (req, res) => {
    try {
      const filteredApartments = await Appartment.find().sort({ apartmentprice: 1 });
      res.json(filteredApartments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const filterascountroom=(req,res) => {
  Appartment.find().sort({ countRoom: -1 }).exec((err, apartments) => {
  if (err) {
    console.error(err);
  } else {
    res.send(apartments);
  }
});
}
  module.exports={filteredApartmentsasarea,filteraslocation,sortasprice,filterascountroom}
  