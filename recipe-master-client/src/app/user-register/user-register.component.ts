import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
