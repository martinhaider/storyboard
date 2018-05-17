import {Component, OnInit} from '@angular/core';
import { Column } from "./column.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log("column component");
  }
}
