import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Column} from "../column/column.model";

@Injectable()
export class GetcolumnsserviceService {

  data: Array<Column> = [];
  constructor(private http: HttpClient) { }

  getColumns(){
    console.log("entered service getcolumns");
    this.http.get<Array<Column>>('http://localhost:8080/get/all/spalte')
      .subscribe(response => this.data = response);
  }
}
