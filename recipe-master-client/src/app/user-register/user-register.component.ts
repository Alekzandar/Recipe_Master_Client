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
    if(age.value < 10 || age.value > 120){
      console.log("NOPE");
    }
    console.log("FIRST NAME: " + fname.value);
    console.log("FIRST NAME TYPE: " + fname.type);
    console.log("PASSWORD: " + password.value)
    u: User;
    this.u.FirstName = fname.value;
    this.u.LastName = lname.value;
    this.u.Email = email.value;
    this.u.Username = username.value;
    this.u.Age = age.value;
    this.u.Password = password.value;
    console.log("USER OBJECT PASSWORD: " + this.u.Password);
    let json = JSON.stringify(this.u);
    console.log("USER OBJECT IS NOW JSON:" + json);
  }
}
