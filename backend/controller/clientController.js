const Client=require('../model/clientModel')
async function getAllClients(req, res) {
    try {
      const clients = await Client.find();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  // Get a single client by ID
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
  
  // Create a new client
  async function createClient(req, res) {
    const client = new Client(req.body);
    try {
      const newClient = await client.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  // Update a client by ID
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
  
  // Delete a client by ID
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

  module.exports={getAllClients,getClientById,createClient,updateClient,deleteClient}