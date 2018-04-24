import {Task} from "../task/task.model";

export class Column {
  name: string;
  tasks: Task[];

  constructor(name: string, tasks: Task[]){
    this.name = name;
    this.tasks = tasks;
  }
}
