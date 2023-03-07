const mongoose = require("mongoose");
const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("CONNECTED TO DATABASE SUCCESSFULLY: ", connection);
  } catch (err) {
    console.log("FAILED TO ESTABLISH CONNECTION TO DATABASE: ", err);
    process.exit(1);
  }
};
module.exports = connect;
