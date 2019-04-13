import { LoggedUser } from '../objects/LoggedUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogInService {
  corsHeaders;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
})


  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' 
    });
   }

  byUsernameUrl = 'http://localhost:8085/recipe-master/user/';

  getUser(username) {
    console.log("IN LOGIN SERVICE FOR REQUEST: " + this.byUsernameUrl+username);
    return this.http.get<LoggedUser>(this.byUsernameUrl+username, {headers:this.headers});
  }
}