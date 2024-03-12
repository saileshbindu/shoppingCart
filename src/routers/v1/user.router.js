const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller")

router.get("/userid", userController.userGetcall)

module.exports = router
