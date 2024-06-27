const express = require('express');
const router = express.Router();
const loginController=require('../controller/loginController')
const regesterController = require('../controller/regesterController');

router.post('/login', loginController.login)
router.get('/testlogin', loginController.test)
router.post('/register',regesterController)
module.exports=router