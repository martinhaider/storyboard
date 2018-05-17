import {Task} from "../task/task.model";

export class Column {
  name: string;
  //tasks: Task[];
  id: number;

  constructor(name: string, id: number){
    this.name = name;
    this.id = id;
  }
}
