const express =  require('express');
const router =  express.Router();
const auth = require('../middleware/auth');
const index =  require('./index');
const login = require('./login');
const home = require('./home');
/*const homeController =  require('../controllers/home');
const indexController =  require('../controllers/index');*/

const setRoutes =  (app) => {
	app.use('/',auth,index);
	app.use('/',login);
	app.use('/',auth,home);
}

module.exports = {setRoutes:setRoutes};