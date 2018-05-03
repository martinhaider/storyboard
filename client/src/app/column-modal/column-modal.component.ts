import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})
export class ColumnModalComponent implements OnInit {

  constructor() { }

  createColumn(title: string){
    console.log(`Title: ${title}`);
  }

  ngOnInit() {
  }

}
