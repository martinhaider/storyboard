export class Task {
  title: string;
  description: string;
  estimate: number;
  assignee: string;
  columnId: number;

  constructor(title: string, description: string, estimate: number, assignee: string, columnId: number){
    this.title = title;
    this.description = description;
    this.estimate = estimate;
    this.assignee = assignee;
    this.columnId = columnId;
  }
}
