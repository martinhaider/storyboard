import { Component } from '@angular/core';
import {PostcreatecolumnService} from "../services/postcreatecolumn.service";


@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})

export class ColumnModalComponent {

  constructor(private postcreatecolumnService : PostcreatecolumnService) { }

  createColumn(title: string){
    this.postcreatecolumnService.postcreatecolumn(title);
  }
}
