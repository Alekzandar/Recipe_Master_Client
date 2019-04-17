import { Component, ViewChild, ElementRef } from '@angular/core';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;

  title = 'Recipe Master';

  ngAfterViewInit() {this.tref.nativeElement.setAttribute('onclick',this.logoutUser); }

  logoutUser = "if(confirm('Are you sure you want to log Out ? ')){sessionStorage.clear();return true;}";
  
}
