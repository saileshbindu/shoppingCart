const Joi = require("joi");
const { password } = require("./custom.validation")


const register = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password)
   })


module.exports = register