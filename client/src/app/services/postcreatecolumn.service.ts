import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Column} from "../column/column.model";
import {RequestOptions} from "@angular/http";

@Injectable()
export class PostcreatecolumnService {

  data: Array<Column> = [];
  constructor(private http: HttpClient) { }

  postcreatecolumn(title: string){
    var spalte = {
        name : title
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(headers);

     this.http.post('http://localhost:8080/add/spalte', spalte.name, {headers: headers})
       .subscribe((res) => {
          console.log("SUCCESS ADD SPALTE: " + res);
         },
         (err) => {
           console.error("ERROR ADD SPALTE: " + err);
         }
       );
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
