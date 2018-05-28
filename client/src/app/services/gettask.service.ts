import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Task} from "../task/task.model";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class GettaskService {

  data: {};
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('http://localhost:8080/get/all/aufgabe')
/*      .subscribe(
        data => {
          console.log("TASK DATA: " + data);
          return data;

        },
        error => console.log('Error: ', error)
      );*/
  }

  /*getTasks(): Observable<Task[]> {
    return this.http.get('http://localhost:8080/get/all/aufgabe')
      .map(response => {
        this.data = response.json();

        console.log(this.data);
      })
      .catch(err => {console.log("")}).asObservable();
  }*/

}
