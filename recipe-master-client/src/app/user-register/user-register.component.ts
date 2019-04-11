import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User';
import { NgForm } from '@angular/forms';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})


export class UserRegisterComponent implements OnInit {
  u: User = { FirstName : " ", LastName : ' ', Email : ' ', Age: 0, UserName: ' ', Password: ' '
   }
  fname: string;
  lname: string;
  email: string;
  age: number;
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
    
  }

//validate the registration form on onSubmit
onSubmit(u : User){
    fname: u.FirstName;
    lname: u.LastName;
    email: u.Email;
    age:u.Age;
    username: u.UserName;
    password: u.Password;
    console.log("IN ON SUBMIT: " + u);
    if (Object.values(u.FirstName) == Object.values(u.LastName)){
      alert("First and Last name has to be different");
      return false;
    }
  }

  submit(){
    if(this.age < 10 || this.age > 120){
      console.log("NOPE");
    }
    console.log("FIRST NAME: " + this.fname);
    console.log("FIRST NAME TYPE: " + this.fname);
    console.log("PASSWORD: " + this.password)
    u: User;
    this.u.FirstName = this.fname;
    this.u.LastName = this.lname;
    this.u.Email = this.email;
    this.u.UserName = this.username;
    this.u.Age = this.age;
    this.u.Password = this.password
    console.log("USER OBJECT PASSWORD: " + this.u.Password);
    let json = JSON.stringify(this.u);
    console.log("USER OBJECT IS NOW JSON:" + json);
  }
}
