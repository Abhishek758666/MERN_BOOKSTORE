const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB connected sucessfully");
  } catch (error) {
    console.log("cannot connect to DB");
  }
};

module.exports = dbConnect;
