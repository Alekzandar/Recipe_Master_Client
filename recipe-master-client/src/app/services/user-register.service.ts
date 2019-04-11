import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  headers: HttpHeaders = new HttpHeaders({
    'Context-Type': 'application/json',
  })

  constructor(private http: HttpClient) {

   }
}
