import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { of } from 'rxjs';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private userObs: Observable <User[]>;
  private userResponse: User[];
  private userList: User[];

  u: User = { 
    FirstName :null, 
    LastName : null, 
    Email :null, 
    Age: null, 
    UserName: null, 
    Password: null,
    ErrorText:''
   }

  fname: string;
  lname: string;
  email: string;
  age: number;
  username: string;
  password: string;

  constructor(private registerService: UserRegisterService) { }

  ngOnInit() {
    
  }

  onSubmit(u : User){
    fname: u.FirstName;
    lname: u.LastName;
    email: u.Email;
    age: u.Age;
    username: u.UserName;
    password: u.Password;
    
    if (u.FirstName!=null && u.LastName!=null && u.FirstName == u.LastName){
      u.ErrorText = "Error";
      return false;
    } 
    
    saveUser(): void {
      this.userResponse.getUsers().subscribe(
        resp => {
          this.userResponse = resp as User[]; 
          this.userList = Object.values(this.userResponse);
          console.log(this.userList);
        },
        (error: any) => console.log(error);
      );
    }

<<<<<<< HEAD
    let jsonValue = JSON.stringify(this.u);
    console.log(jsonValue);
    alert('Form is Submitted Successfully');
=======
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
>>>>>>> c4697b37d6abf0eb597dd31bebf71f9d4acddcd5
  }
  
  
}
