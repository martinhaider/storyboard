import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PostcreatetaskService {

  constructor(private http: HttpClient) { }

  postcreatetask(title: String, description: String, estimate: number, assignee: String, position: number, spalte: number){
    //TODO: spalte referenz?
    var task = {
      titel: title,
      beschreibung: description,
      person: assignee,
      estimate: estimate,
      position: position,
      spalte: spalte
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    //TODO: check if task object is valid
    this.http.post('http://localhost:8080/add/aufgabe', JSON.stringify(task), {headers: headers})
      .subscribe((res) => {
          console.log("SUCCESS ADD TASK: " + res);
          //TODO: close modal
        },
        (err) => {
          console.error("ERROR ADD TASK: " + err);
        }
      );
  }
}
