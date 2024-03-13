const express = require("express");
const {validateSchema} = require("../../middleware/validate")
const authController = require("../../controllers/auth.controller");
const register = require("../../validation/auth.validation");
const router = express.Router();

const userValidation =  validateSchema(register)

router.post('/register', userValidation, authController.register)

module.exports = router