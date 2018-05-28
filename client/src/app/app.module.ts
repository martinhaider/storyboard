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
import {PostcreatetaskService} from "./services/postcreatetask.service";
import {GettaskService} from "./services/gettask.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GetcolumnsserviceService,
    GettaskService,
    PostcreatecolumnService,
    PostcreatetaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
