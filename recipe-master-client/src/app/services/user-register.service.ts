import { Injectable } from '@angular/core';
import { User } from './../objects/user';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const registerHeaders = {
  headers: new HttpHeaders({
    'Context-Type': 'application/json',
  })
};

  @Injectable({
    providedIn: 'root'
  })
  export class UserRegisterService {
  //headers: HttpHeaders = new HttpHeaders({
    //'Context-Type': 'application/json',
 // })

  constructor(private http: HttpClient) {}
  
  //
  registerUrl = 'https://localhost:8085/recipe-master/user';

  getUsers() {
    return this.http.get<User[]> ('https://localhost:3000/users', registerHeaders);
    //return this.httpClient.get<User[]> (this.registerUrl, registerHeaders);
    }
  }


