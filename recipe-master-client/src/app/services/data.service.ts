import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private idSource = new BehaviorSubject('default id');
  currentId = this.idSource.asObservable();

  constructor() { }

  changeMessage(id: string) {
    console.log("IN DATA SERVICE: " + id);
    this.idSource.next(id);
    console.log("idSource IS NOW: " + this.idSource.value);
  }

  getIdSource(){
    return this.idSource.asObservable();
  }
}
