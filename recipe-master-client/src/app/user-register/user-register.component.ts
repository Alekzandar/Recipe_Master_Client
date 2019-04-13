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
  u: User = { firstname : " ", lastname : ' ', email : ' ', age : 0, username: ' ', password: ' '
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
    fname: u.firstname;
    lname: u.lastname;
    email: u.email;
    age:u.age;
    username: u.username;
    password: u.password;
    console.log("IN ON SUBMIT: " + u);
    if (Object.values(u.firstname) == Object.values(u.lastname)){
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
    this.u.firstname = this.fname;
    this.u.lastname = this.lname;
    this.u.email = this.email;
    this.u.username = this.username;
    this.u.age = this.age;
    this.u.password = this.password
    console.log("USER OBJECT PASSWORD: " + this.u.password);
    let json = JSON.stringify(this.u);
    console.log("USER OBJECT IS NOW JSON:" + json);
  }
}
