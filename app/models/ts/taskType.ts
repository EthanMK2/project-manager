
type TaskType = {
  id: string,
  completed: boolean,
  description: string,
  note: string,
  cost: number | string,
  date: Date | undefined
}

export default TaskType;
