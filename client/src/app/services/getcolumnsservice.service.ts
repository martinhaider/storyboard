import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Column} from "../column/column.model";
import 'rxjs/Rx';

@Injectable()
export class GetcolumnsserviceService {

  data: Array<Column> = [];
  constructor(private http: HttpClient) { }

  getColumns(){
    this.http.get<Array<Column>>('http://localhost:8080/get/all/spalte')
      .subscribe(
        //data => console.log('success1446: ', data),
        data => {
          return data;
          //this.data = data;
          //this.getColumnsSuccess();
        },
        error => console.log('oops1446: ', error)
      );
  }

  getColumnsSuccess(){
    //TODO: put data to html view
    console.log("getColumnsSuccess response: " + this.data);
  }
}
