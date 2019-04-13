import { Injectable } from '@angular/core';
import { User } from './../objects/user';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const registerHeaders = {
  headers: new HttpHeaders({
    'Context-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};


  @Injectable({
    providedIn: 'root'
  })
  export class UserRegisterService {

  constructor(private httpClient: HttpClient) {}
  
  
  registerUrl = 'http://localhost:8085/recipe-master/user';

  getUsers() {
    return this.httpClient.get<User[]> (this.registerUrl, registerHeaders);
    }
  

  saveUser(u:User):Observable<User> {
    return this.httpClient.post<User>(this.registerUrl,u, registerHeaders).pipe(catchError(error => {
      return throwError(error.message); 
    }));
  }
  
  }