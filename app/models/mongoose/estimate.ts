import mongoose, { Schema, models } from "mongoose";
import TaskType from "../ts/taskType";
import ContactType from "../ts/contactType";
import { SourceType } from "./source";

export const estimateSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  checklist: {
    type: Array<TaskType>,
  },
  contacts: {
    type: Array<ContactType>,
  },
  sources: {
    type: Array<SourceType>,
  },
  address: {
    type: String
  },
  completionStatus: {
    type: String
  },
  finishDate: {
    type: Date
  },
  userId: {
    type: String,
  },
})

// TODO: change schema: delete collection then change sources to array of objectIds

export const Estimate = models.estimates || mongoose.model("estimates", estimateSchema);

export type EstimateType = {
  _id: string,
  title: string,
  checklist: Array<TaskType>
  contacts: Array<ContactType>,
  sources: Array<SourceType>,
  address: string,
  completionStatus: string,
  finishDate: Date,
  userId: string
}
