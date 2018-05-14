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
})
export class AppComponent {
  tasks: Task[];
  columns: Array<Column> = [];

  constructor(private getcolumnsService: GetcolumnsserviceService){
  }
/*
  listA = [
    {name: 'milk'},
    {name: 'juice'}
  ];

  listB = [
    {name: 'beer'},
    {name: 'water'}
  ];

  listC = [
    {name: 'wine'}
  ];

  onListADrop(e: DropEvent) {
    this.listA.push(e.dragData);
    this.removeItem(e.dragData, this.listB);
  }

  onListBDrop(e: DropEvent) {
    this.listB.push(e.dragData);
    this.removeItem(e.dragData, this.listA);
  }

  onListCDrop(e: DropEvent) {
    this.listC.push(e.dragData);
    this.removeItem(e.dragData, this.listA);
  }
*/
  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.title
    }).indexOf(item.title);
    list.splice(index, 1);
  }

  list1 = [
    {title: 'Task Title', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.', assignee: 'lukas', estimate: 10, columnId: 1},
    {title: 'randomtitle', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.', assignee: 'lukas', estimate: 5, columnId: 1},
    {title: 'anothertask', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.', assignee: 'lukas', estimate: 10, columnId: 1},
    {title: 'onemoretask title', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.', assignee: 'luerretkas', estimate: 5, columnId: 1},
    {title: 'yet another task', description: 'Lorem ipsum dolor sit amet.', assignee: 'lukacecerws', estimate: 10, columnId: 1},
    {title: 'Bdsfdgf', description: 'Lorem ipsum dolor sit amet.', assignee: 'lukceeas', estimate: 5, columnId: 1},
    {title: 'Suzuki', description: 'Lorem ipsum dolor sit amet.', assignee: 'martin', estimate: 3, columnId: 1}
  ];

  list2 = [
    {title: 'lala', description: 'Lorem ipsum dolor sit amet.', assignee: 'matthias', estimate: 10, columnId: 2},
    {title: 'test', description: 'Lorem ipsum dolor sit amet.', assignee: 'max', estimate: 5, columnId: 2},
    {title: 'title', description: 'Lorem ipsum dolor sit amet.', assignee: 'maxime', estimate: 3, columnId: 2}
  ];

  list3 = [
    {title: 'lala', description: 'Lorem ipsum dolor sit amet.', assignee: 'matthias', estimate: 10, columnId: 3}
  ];

  list4 = [];

  list5 = [];


  onList1Drop(e: DropEvent) {
    console.log(e);
    this.list1.unshift(e.dragData);
    this.removeItem(e.dragData, this['list'+e.dragData.columnId]);
    this.list1[0].columnId = 1;
  }

  onList2Drop(e: DropEvent) {
    console.log(e);
    this.list2.unshift(e.dragData);
    this.removeItem(e.dragData, this['list'+e.dragData.columnId]);
    this.list2[0].columnId = 2;
  }

  onList3Drop(e: DropEvent) {
    console.log(e);
    this.list3.unshift(e.dragData);
    this.removeItem(e.dragData, this['list'+e.dragData.columnId]);
    this.list3[0].columnId = 3;
  }

  onList4Drop(e: DropEvent) {
    console.log(e);
    this.list4.unshift(e.dragData);
    this.removeItem(e.dragData, this['list'+e.dragData.columnId]);
    this.list4[0].columnId = 4;
  }

  onList5Drop(e: DropEvent) {
    console.log(e);
    this.list5.unshift(e.dragData);
    this.removeItem(e.dragData, this['list'+e.dragData.columnId]);
    this.list5[0].columnId = 5;
  }

  ngOnInit() {
    this.getColumns();
  }
  getColumns(): void {
     this.getcolumnsService.getColumns();
  }
}
