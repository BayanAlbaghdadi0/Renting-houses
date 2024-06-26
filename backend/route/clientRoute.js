const express=require('express')
const router=express.Router();
const clientController=require('../controller/clientController');

router.get("/test",clientController.test);
router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getClientById);

router.post("/", clientController.createClient);

router.put("/:id", clientController.updateClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;