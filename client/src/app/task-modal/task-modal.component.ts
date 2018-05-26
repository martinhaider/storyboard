import { Component, OnInit } from '@angular/core';
import {PostcreatetaskService} from "../services/postcreatetask.service";

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor(private postcreatetaskService : PostcreatetaskService) { }

  createTask(title: string, description: string, estimate: number, assignee: string): void{
    //TODO: position and spalte
    this.postcreatetaskService.postcreatetask(title, description, estimate, assignee, 0, 0);
    //console.log(`Title: ${title}; Description ${description}; Estimate: ${estimate}; Assignee: ${assignee}`);
  }

  ngOnInit() {
  }
}
