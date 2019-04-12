import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import { catchError } from 'rxjs/operators';
//import { ErrorObservable } from 'rxjs/observable/ErrorObser';
//import { UserRegisterService } from './../services/UserRegisterService';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {}
  
  /*registerUrl = 'https://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]> (this.registerUrl, registerHeaders);
    //return this.httpClient.get<User[]> ('https://localhost:8085/recipe-master/user');
      .pipe(catchError(this.handleError));
    }

  private handleError(errorResponse: HttpErrorResponse){
    if(errorResonse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse.error.message);
    }else{
      console.error('ServerSide Error: ', errorResponse);
    }
    return new ErrorObservable('There is a problem with the service. We are notified and working on it. Please try again later.');
  }  

  save(u: User): Observable<User>{
    return this.http.post<User[]>('https://localhost:3000/users', u, registerHeaders)
    pipe.(catchError(this.handleError));
  }
}*/
