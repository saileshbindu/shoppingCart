const userService = require("../services/user.service")


const register = async (req, res) =>{
    const user = await userService.createUser(req.body);
    console.log("User Details:", user)
    return res.status(200).send(user)
   
    
}



module.exports = {
    register
}