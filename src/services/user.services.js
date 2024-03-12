const User = require("../models/user.model");
const bcrypt = require("bcryptjs")

const creatUser = async (data) =>{
    if(await User.isEmailTaken(data.email)){
        throw new Error("Email already taken")
    }
    if(!data.email){
        throw new Error("Email is not allowed to be empty")
    }
    if(!data.name){
        throw new Error("Name field is required")
    }
    if(!data.password){
        throw new Error("Password field is required")
    }

    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(data.password, salt);
    const user = await User.creatUser({...data, password: hashpassword});

    return user

}

module.exports = {
    creatUser
}