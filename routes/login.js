var express = require('express');
var router = express.Router();
const loginController =  require('../controllers/login');

/* GET home page. */
router.post('/login',loginController.login);

module.exports = router;