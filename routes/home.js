var express = require('express');
var router = express.Router();
const homeController =  require('../controllers/home');

/* GET home page. */
router.get('/home',homeController.home);

module.exports = router;