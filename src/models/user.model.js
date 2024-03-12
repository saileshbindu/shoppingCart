const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")


const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        trim: true,
    },
    email: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type: 'string',
        required: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error("Password must contain at least one letter and one number");
            }
        }
    }
    
}, {
    timestamps: true,
});


userSchema.statics.isEmailTaken = async function (email){
    const user = await this.findOne({email})
    return !!user
}

userSchema.methods.isPasswordMatch =  async function(password){
    const regPassword = await bcrypt.compare(password, this.password);
    return regPassword
}



const User = mongoose.model("user", userSchema);

module.exports = {User}