const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");


app.listen(config.port, async () => {
  console.log(`Server is running PORT Number: ${config.port}`);
  await mongoose.connect(config.mongoos.url); 
  console.log("Database connected"); 
});
