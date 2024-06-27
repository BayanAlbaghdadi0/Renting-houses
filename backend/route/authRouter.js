const express = require('express');
const router = express.Router();
const loginController=require('../controller/loginController')


router.post('/login', loginController.login)
router.get('/testlogin', loginController.test)
module.exports=router