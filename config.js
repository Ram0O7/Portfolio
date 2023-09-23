// config.js
const dev = process.env.NODE_ENV !== "production";

export const baseURL = dev
  ? "http://localhost:3000"
  : "https://ramkrishnrai.vercel.app";

export const DATABASE_URI = dev
  ? "mongodb://127.0.0.1:27017/portfolio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
  : process.env.MONGO_URI;
