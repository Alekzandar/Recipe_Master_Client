import { LogInService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { LoggedUser } from '../objects/LoggedUser';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-maressa-view',
  templateUrl: './maressa-view.component.html',
  styleUrls: ['./maressa-view.component.css']
})

export class MaressaViewComponent implements OnInit {
  loginForm: FormGroup;
  private username: string;
  loading = false;
  submitted = false;
  private responseUser: LoggedUser;

  constructor(private formBuilder: FormBuilder, private loginService: LogInService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    //this.loading = true; Really don't need this while testing
    //////////////////////////////////////////////////////////
    console.log("Value:" + this.loginForm.get('username').value);
    this.username = this.loginForm.get('username').value;
    console.log("Value:" + this.loginForm.get('password').value);
    this.loginService.getUser(this.username).subscribe(
      userResponse => {
        this.responseUser = userResponse;
        console.log("Retrieved User");
        console.log(userResponse.id);
        console.log("User's Username: " + userResponse.username);
        console.log("User's Password: " + userResponse.password);
        this.logIn();
      });
  
  }

  logIn(): boolean {
    console.log("IN LOGIN FUNCTION");
    if (this.responseUser.username == this.loginForm.get('username').value){
      console.log("MATCHING USERNAME'S");
      if (this.responseUser.password == this.loginForm.get('password').value){
        sessionStorage.setItem('isLoggedIn', "true");
        console.log("SETTING SESSION STORAGE");
        sessionStorage.setItem('userID', this.responseUser.id.toString());
        window.location.href = '/main';
        return true;
      }
    }else{
      return false;
    }
  }





}