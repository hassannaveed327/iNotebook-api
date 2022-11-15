const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE;
  

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected Successfully");
  });
};

module.exports = connectToMongo;
