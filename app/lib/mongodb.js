import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to mongodb: ", error)
  }
}
