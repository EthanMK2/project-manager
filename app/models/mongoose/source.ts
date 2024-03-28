import mongoose, { Schema, models } from "mongoose";

export const sourceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  phoneNumbers: {
    type: Array,
  },
  emails: {
    type: Array,
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
  phoneNumbers: string[],
  emails: string[],
  userId: string
}