import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PostcreatecolumnService {

  constructor(private http: HttpClient) { }

  postcreatecolumn(title: string){
    var spalte = {
        name : title
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://localhost:8080/add/spalte', spalte.name, {headers: headers})
      .subscribe((res) => {
          console.log("SUCCESS ADD SPALTE: " + res);
          //TODO: close modal
        },
        (err) => {
          console.error("ERROR ADD SPALTE: " + err);
        }
      );
  }
}
