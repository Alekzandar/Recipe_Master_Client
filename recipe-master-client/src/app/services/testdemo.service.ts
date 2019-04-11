import { TestDemoObj } from '../objects/testserverdemo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestDemoService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
})
  corsHeaders;
  root;
  //headers = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'  // edit 
    });
   }

  demoUrl = 'http://localhost:8085/recipe-master/test';

  getTest() {
    return this.http.get<TestDemoObj[]>(this.demoUrl, {headers:this.headers});
      
  }
  postTest(object) :Observable<TestDemoObj>{
    console.log("JSON Object passed to our Service: " + object);
    return this.http.post<TestDemoObj>(this.demoUrl, object, {headers:this.headers});

  }
}
