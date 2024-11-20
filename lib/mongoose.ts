import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MongoDB URL not found");
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "VV",
    });
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    throw error;
    console.log(error);
  }
};
