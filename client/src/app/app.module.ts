import {jQuery} from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import {GetcolumnsserviceService} from "./services/getcolumnsservice.service";
import { TaskModalComponent } from './task-modal/task-modal.component';
import {PostcreatecolumnService} from "./services/postcreatecolumn.service";

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    TaskModalComponent,
    ColumnModalComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    GetcolumnsserviceService,
    PostcreatecolumnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
