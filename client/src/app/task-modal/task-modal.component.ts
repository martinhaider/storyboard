import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor() { }

  createTask(title: string, description: string, estimate: number, assignee: string): void{
    console.log(`Title: ${title}; Description ${description}; Estimate: ${estimate}; Assignee: ${assignee}`);
  }

  ngOnInit() {
  }

}
