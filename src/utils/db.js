import mongoose from "mongoose";
import { DATABASE_URI } from "../../config";
async function connectToDatabase() {
  try {
    if (!DATABASE_URI) {
      throw new Error("DATABASE_URI is not defined");
    }
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database!");
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
  }
}

export default connectToDatabase;
