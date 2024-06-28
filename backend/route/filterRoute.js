const express=require('express');
const router=express.Router();
const filtercontroller=require('../controller/filterController')
router.get('/filterarea', filtercontroller.filteredApartmentsasarea)
router.get("/location", filtercontroller.filteraslocation)
module.exports=router