require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const dbUri =
      process.env.MONGO_URI || "mongodb://localhost:27017/myPortfolio";
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB database");
  } catch (e) {
    console.error(`MongoDB connection error: ${e}`);
  }
};
module.exports = connectDb;
