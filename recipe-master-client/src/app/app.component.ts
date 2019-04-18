import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { LogInService } from './services/login.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Recipe Master';

  constructor( private logInServce: LogInService) { }

  ngOnInit() { this.showLogOut(); }

  ngDoCheck() { this.showLogOut();}

	showLogOut(){
    let status = this.logInServce.loggedIn();
    return status;
	}
  
  logOut() {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('username');
    window.location.href = '/main';
  }



}
