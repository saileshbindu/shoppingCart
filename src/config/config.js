
const dotenv = require("dotenv").config()
const port = process.env.PORT


module.exports = {
    port,
    mongoos:{
        url: process.env.MONGODB_URL, 
        options: { 
        useCreateIndex: true, 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
       } 
    }
}