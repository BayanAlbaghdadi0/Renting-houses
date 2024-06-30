const Client=require('../model/clientModel')

// const clientsData = [
//   {
//     "email": "client1@example.com",
//     "username": "client1",
//     "password": "password1",
//     "address": "Address 1",
//     "phone": 1234567890,
//   },
//   {
//     email: "client2@example.com",
//     username: "client2",
//     password: "password2",
//     address: "Address 2",
//     phone: 2345678901,
//   },
//   {
//     email: "client3@example.com",
//     username: "client3",
//     password: "password3",
//     address: "Address 3",
//     phone: 3456789012,
//   },
//   {
//     email: "client4@example.com",
//     username: "client4",
//     password: "password4",
//     address: "Address 4",
//     phone: 4567890123,
//   },
//   {
//     email: "client5@example.com",
//     username: "client5",
//     password: "password5",
//     address: "Address 5",
//     phone: 5678901234,
//   },
// ];
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
    console.log("hibro")
    const client = new Client(req.body);
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
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