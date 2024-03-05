import mongoose from "mongoose";

export default async function connectMongoDB() {
  const readyState = mongoose.connection.readyState;
  switch (readyState) {
    case 0:
      console.log("Not connected to db. Will connect to db...")
      break;
    case 1:
      console.log("Already Connected to db! Preventing another connection call...")
      return;  // Prevents multiple calls to mongoose.connect (one connection per app is best practice)
    case 2:
      console.log("Connecting to db...")
      break;
    case 3:
      console.log("Disconnecting from db...")
      break;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to mongodb: ", error)
  }
}
