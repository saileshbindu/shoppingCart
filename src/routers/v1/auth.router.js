const express = require("express");
const authValidation = require("../../validation/auth.validation");
const {register} = require("../../controllers/auth.controller");
const router = express.Router();


router.post('/register', authValidation.register, register)

module.exports = router