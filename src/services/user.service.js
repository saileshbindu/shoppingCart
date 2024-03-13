const {User} = require('../models/user.model');
const bcrypt = require("bcryptjs")
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError")

const createUser = async (data) =>{
    console.log("UserData:", data)
    if(await User.isEmailTaken(data.email)){
       //throw new ApiError(httpStatus.OK, "Email already taken")
       res.status(200).json("Email already taken")
    }
    if(!data.email){
        throw new ApiError(httpStatus.BAD_REQUEST, "Email is not allowed to be empty")
    }
    if(!data.name){
        throw new ApiError(httpStatus.BAD_REQUEST, "Name field is required")
    }
    if(!data.password){
        throw new ApiError(httpStatus.BAD_REQUEST, "Password field is required")
    }

    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(data.password, salt);
    const user = await User.create({...data, password: hashpassword});

    return user

}

module.exports = {
    createUser
}