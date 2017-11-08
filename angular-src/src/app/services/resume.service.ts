import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  constructor(private http: Http) { }

  getResumeData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // used in production
    return this.http.get('http://localhost:3000/resumeData', {headers: headers}).map(res => res.json());
    // used for heroku deployment
    // return this.http.get('/resumeData', {headers: headers}).map(res => res.json());
  }

}
