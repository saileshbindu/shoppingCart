
const password = (passValue,errMsg) =>{
    if(passValue.length < 8){
        return errMsg.message("password must be at least 8 characters")
    }
    if(!passValue.match(/\d/) || !passValue.match(/[a-zA-Z]/)){
        return errMsg.message("password must contain at least 1 letter and 1 number")
    }
    return passValue
}

module.exports = {
    password
}