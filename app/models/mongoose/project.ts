import mongoose, { Schema, models } from "mongoose";
import TaskType from "../ts/taskType";
import ContactType from "../ts/contactType";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  checklist: {
    type: Array
  },
  contacts: {
    type: Array
  },
  notes: {
    type: String
  },
  shortDescription: {
    type: String
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
  inspectionSuccessful: {
    type: Boolean
  },
  priority: {
    type: String
  },
  expectedPay: {
    type: String
  }
}, { timestamps: true })

export const Project = models.project || mongoose.model("Project", projectSchema);

export type ProjectType = {
  title: string,
  checklist: Array<TaskType>,
  contacts: Array<ContactType>,
  notes: string,
  shortDescription: string,
  address: string,
  completionStatus: string,
  finishDate: Date | undefined,
  inspectionSuccessful: boolean,
  priority: string,
  expectedPay: string
}
