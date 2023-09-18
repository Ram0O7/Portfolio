import mongoose from "mongoose";
async function connectToDatabase() {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database!");
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
  }
}

export default connectToDatabase;
