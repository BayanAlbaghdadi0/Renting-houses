const express = require('express');
const router = express.Router();
const apartmentController = require('../controller/apartmentController')


router.post('/', apartmentController.createApartment);


router.get('/', apartmentController.getAllApartments);


router.get('/:id', apartmentController.getApartmentById);

router.put('/:id', apartmentController.updateApartmentById);


router.delete('/:id', apartmentController.deleteApartmentById);

module.exports = router;