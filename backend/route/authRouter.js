const express = require('express');
const router = express.Router();
const loginController=require('../controller/loginController')
const regesterController = require('../controller/regesterControler');
const logout = require('../controller/logout')
const cheakusertoken=require('../middlewre/cookieJwtAuth')

router.post('/login',loginController.login)
router.post('/logout', logout.logout)
router.get('/testlogin', loginController.test)
router.post('/register',regesterController.register)
module.exports=router