const express = require ('express');
const router = express.Router();

//const signup = require('../controllers/auth.controllers')
const authcontrollers = require('../controllers/auth.controllers');
router.post("/signup",authcontrollers.signup);
router.post("/login",authcontrollers.login);

module.exports = router;