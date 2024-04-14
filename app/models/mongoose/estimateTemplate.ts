import mongoose, { Schema, models } from "mongoose";
import TaskType from "../ts/taskType";
import ContactType from "../ts/contactType";
import { SourceType } from "./source";

export const estimateTemplateSchema = new Schema({
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
    type: Boolean
  },
  finishDate: {
    type: Date
  },
  userId: {
    type: String,
  },
})

export const EstimateTemplate = models.estimateTemplates || mongoose.model("estimateTemplates", estimateTemplateSchema);

export type EstimateTemplateType = {
  _id: string,
  title: string,
  checklist: Array<TaskType>
  contacts: Array<ContactType>,
  sources: Array<SourceType>,
  address: string,
  completionStatus: boolean,
  finishDate: Date,
  userId: string
}
