import {jQuery} from 'jquery';
import { Component } from '@angular/core';
import {DropEvent} from 'ng-drag-drop';
import {Task} from "./task/task.model";
import { OnInit } from '@angular/core';
import {GetcolumnsserviceService} from "./services/getcolumnsservice.service";
import {Column} from "./column/column.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
      /*transition: all .2s ease-in-out;*/
      /*transform: scale(1.05);*/
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }
  `
  ]
})
export class AppComponent {
  tasks: Task[];
  columns: Array<Column> = [];

  constructor(private getcolumnsService: GetcolumnsserviceService){
  }

  list1 = [
    {name: 'Toyota'},
    {name: 'Bugati'},
    {name: 'Suzuki'}
  ];

  list2 = [
    {name: 'Mercedes'},
    {name: 'Honda'},
    {name: 'BMW'}
  ];


  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2)
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  ngOnInit() {
    this.getColumns();
  }
  getColumns(): void {
     this.getcolumnsService.getColumns();
  }
}
