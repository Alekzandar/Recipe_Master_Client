import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  headers: HttpHeaders = new HttpHeaders({
    'Context-Type': 'application/json',
  })

  constructor(private http: HttpCleint) {

   }
}
