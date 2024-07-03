const express = require("express");
const router = express.Router();
const ownerController=require('../controller/ownerController')
const ownerhouseController=require('../controller/ownerandapartmentController')
router.get("/test",ownerController.test)
router.post("/", ownerController.createOwner);

router.put("/:id",ownerhouseController.updateownerandAppartment)
router.get("/:id",ownerhouseController.getownerbyid)


router.get("/owners/:id", ownerController.getOwner);

router.get("/owners",ownerController.getAllOwners);


router.put("/update/:id", ownerController.updateOwner);

router.delete("/owners/:id", ownerController.deleteOwner);

module.exports = router;
