import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PortfolioService {

  constructor(private http: Http) { }

  getContactData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // used in production
    // return this.http.get('http://localhost:3000/resumeContact', {headers: headers}).map(res => res.json());
    // used for heroku deployment
    return this.http.get('/resumeContact', {headers: headers}).map(res => res.json());
  }

}
