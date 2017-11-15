import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  constructor(private http: Http) { }

  getResumeData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // used in production
    // return this.http.get('http://localhost:3000/resume', {headers: headers}).map(res => res.json());
    // used for heroku deployment
    return this.http.get('/resume', {headers: headers}).map(res => res.json());
  }

}
