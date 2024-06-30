const Client=require('../model/clientModel')
const bcrypt = require('bcrypt');


// {
//   "email": "example@example.com",
//   "username": "example_user",
//   "password": "example_password",
//   "phone": 1234567890,
//   "role": "admin"
// }


const  test=(req,res)=>{
  console.log("test");
  res.send("test")
}
async function getAllClients(req, res) {
    try {
  
      const clients = await Client.find();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  async function getClientById(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) {
        return res.status(404).json({ message: "Client not found" });
      }
      res.json(client);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
 
  

async function createClient(req, res) {
  try {
    const { email, username, password, address, phone,role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = new Client({
      email,
      username,
      password: hashedPassword,
      address,
      phone,
      role
    }); 

    const savedClient = await newClient.save();

    res.status(201).json(savedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}




  async function updateClient(req, res) {
    try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!client) {
        return res.status(404).json({ message: "Client not found" });
      }
      res.json(client);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  async function deleteClient(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      if (!client) {
        return res.status(404).json({ message: "Client not found" });
      }
      res.json({ message: "Client deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports={getAllClients,getClientById,createClient,updateClient,deleteClient,test}