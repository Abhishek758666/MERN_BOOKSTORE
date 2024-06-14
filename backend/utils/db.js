const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(process.env.URI);
};

module.exports = dbConnect;
