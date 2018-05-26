import {jQuery} from 'jquery';
import { Component } from '@angular/core';
import {DropEvent} from 'ng-drag-drop';
import {Task} from "./task/task.model";
import { OnInit } from '@angular/core';
import {GetcolumnsserviceService} from "./services/getcolumnsservice.service";
import {Column} from "./column/column.model";
import {GettaskService} from "./services/gettask.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  columns = [
    new Column('ToDoTest', 1),
    new Column('In ProgressTest', 2),
    new Column ('Sprint Backlog', 3)
  ];

  tasks = [
    new Task('XXXX', 'de ergr re rerw4f43scr', 1, 'lukas', 5),
    new Task('titretrztuzzrtle', 'deregre ergrescr', 5, 'lukavetrr res', 1),
    new Task('tier ertrtle', 'deretzrrrer34gtreescr', 13, 'lu erkas', 1),
    new Task('t erzhh5itle', 'descr', 5, 'lukas', 2),
    new Task('tit rerle', 'dere trhu,io iureetescr', 8, 'lukrereas', 3),
    new Task('titerefe rerle', 'dere trhu,io iureetescr', 8, 'lukrereas', 3),
    new Task('tit r343erle', 'dere trhu,io iureetescr', 8, 'martin', 4),
    new Task('titserre rerle', 'dere trhu,io iureetescr', 8, 'martin', 2),
    new Task('tit rerle', 'dere trhu,io iureetescr', 8, 'matthias', 2),
    new Task('tit re345rle', 'dere trhu,io iureetescr', 8, 'sven', 2),
    new Task('tit 343rerle', 'dere trhu,io iureetescr', 8, 'olav', 4),
  ];

  //columns: Array<Column> = [];

  constructor(private getcolumnsService: GetcolumnsserviceService, private gettaskService: GettaskService){
  }

  onListDrop(e: DropEvent, id) {
    e.dragData.columnId = id;
  }


  /* old
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

  old END */

  ngOnInit() {
    //this.columns = this.getColumns();
    this.tasks = this.getTasks();
  }

  getColumns(): void {
     this.getcolumnsService.getColumns();
  }

  getTasks(): void {
    this.gettaskService.getTasks();
  }

  filterItemsOfId(id){
    return this.tasks.filter(x => x.columnId == id);
  }

  printTasks(){
    console.log('*START*\n');
    for(var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i].title + ' ' + this.tasks[i].columnId);
    }
    console.log('\n*END*')
  }
}
