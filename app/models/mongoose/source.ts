import mongoose, { Schema, models } from "mongoose";

export const sourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  userId: {
    type: String,
  },
})

export const Source = models.sources || mongoose.model("sources", sourceSchema);

export type SourceType = {
  _id: string,
  name: string,
  description: string,
  phoneNumber: string,
  email: string,
  userId: string
}