export class Task {
  title: string;
  description: string;
  estimate: number;
  assignee: string;

  constructor(title: string, description: string, estimate: number, assignee: string){
    this.title = title;
    this.description = description;
    this.estimate = estimate;
    this.assignee = assignee;
  }
}
