const express = require('express');
const router = express.Router();
const apartmentController = require('../controller/apartmentController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });
const saveFiles = upload.array('pictures', 5); 

router.get('/welcome', apartmentController.wellcome);
router.post('/', apartmentController.createApartment);
router.get('/', apartmentController.getAllApartments);
router.get('/:id', apartmentController.getApartmentById);
router.put('/:id', apartmentController.updateApartmentById);
router.delete('/:id', apartmentController.deleteApartmentById);

module.exports = router;