const express = require("express");
const router = express.Router();
const ownerController=require('../controller/ownerController')
router.get("/test",ownerController.test)
router.post("/", ownerController.createOwner);


router.get("/owners/:id", ownerController.getOwner);

router.get("/owners",ownerController.getAllOwners);


router.put("/owners/:id", ownerController.updateOwner);

router.delete("/owners/:id", ownerController.deleteOwner);

module.exports = router;
