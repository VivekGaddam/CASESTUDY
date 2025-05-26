import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
  }
};

export default ConnectDB;
