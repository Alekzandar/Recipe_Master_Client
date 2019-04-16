import { Component, OnInit } from '@angular/core';
import { User } from '../objects/User';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { of } from 'rxjs';
import { UserRegisterService } from './../services/user-register.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private userObs: Observable <User[]>;
  private userResponse: User[];
  private userList: User[];

  u: User = new User();


  constructor(private registerService: UserRegisterService) {
    
    
    this.resetUser();

   }

   resetUser(){
    this.u.firstname = null;
    this.u.lastname =  null; 
    this.u.email = null;
    this.u.age=  null;
    this.u.username=  null; 
    this.u.password=  null;
    this.u.ErrorText= '';
   }

  ngOnInit() {
    
  }

  onSubmit(u : User){
    
    if (u.firstname!=null && u.lastname!=null && u.firstname == u.lastname){
      u.ErrorText = "First and Last name cannot be same";
      return false;
    }
    else
    {
      u.ErrorText = "";
    } 
    // let jsonValue = JSON.stringify(this.u);
    console.log(this.u);
    this.registerService.saveUser(this.u).subscribe();
    this.resetUser();
    u.ErrorText = "Form Submitted Successfully!!!";
    window.location.href = '/main';

  }
}