const userService = require("../services/user.services")


const register = async (req, res) =>{
    const user = await userService.creatUser(req.body);
    console.log("User Details:", user)
    return res.status(200).send(user)
   
    
}



module.exports = {
    register
}