import {Component, Input, OnInit} from '@angular/core';
import {DropEvent} from 'ng-drag-drop';
import { Column } from "./column.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}