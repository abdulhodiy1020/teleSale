    const Client = require("../models/Client.js");

    // Create a new client
    exports.createClient = async (req, res) => {
      try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    // Get all clients
    exports.getAllClients = async (req, res) => {
      try {
        const clients = await Client.find();
        res.status(200).json(clients);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    // Get client by ID
    exports.getClientById = async (req, res) => {
      try {
        const client = await Client.findById(req.params.id);
        if (!client)
          return res.status(404).json({ message: "Client not found" });
        res.status(200).json(client);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    // Update client by ID
    exports.updateClient = async (req, res) => {
      try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        if (!client)
          return res.status(404).json({ message: "Client not found" });
        res.status(200).json(client);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    // Delete client by ID
    exports.deleteClient = async (req, res) => {
      try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client)
          return res.status(404).json({ message: "Client not found" });
        res.status(200).json({ message: "Client deleted" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
