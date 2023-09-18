import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  message: { type: String },
});

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
