import {jQuery} from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
import {GetcolumnsserviceService} from "./services/getcolumnsservice.service";

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    GetcolumnsserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
