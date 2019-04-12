import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-maressa-view',
  templateUrl: './maressa-view.component.html',
  styleUrls: ['./maressa-view.component.css']
})

export class MaressaViewComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  username: string;
  password: string;
  message: string;
  stringifiedData: any;
  Users = [
    { username: 'Example1', password: '123'},
    { username: 'Example2', password: 'abc'}
  ];
  /*loginForm = new FormGroup ({
    username: new FormControl()
  });*/

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  pushUser(username: any, password: any): void {
    this.Users.push(username, password);
  }

  //get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;
    //////////////////////////////////////////////////////////
    console.log("Value:" + this.loginForm.get('username').value);
    console.log("Value:" + this.loginForm.get('password').value);
    this.pushUser(this.loginForm.get('username').value, this.loginForm.get('password').value);

    this.stringifiedData = JSON.stringify(this.Users);
    console.log("With Stringify: ", this.stringifiedData);
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
/*
  login(){
      this.getUsers();
  }

  getUsers(){
      var app = angular.module('myApp', []);
      app.controller('formCtrl', function($scope) {
        {{ $scope.Form.InputUsername.$valid }};
        {{ $scope.Form.InputPassword.$valid }};
        $scope.master={username: "testuser", password: "testpass"};
        $scope.reset=function() {
          $scope.user = angular.copy($scope.master);
          //checkIfEmpty();ls
        };
        $scope.reset();
      });

        console.log('got user data');

        console.log(data);
      },
      error => console.log('something wrong happened');
    )
  }
}
Create input fields for a username and password then button
At click create typescript functions to store data for those input fields
Store them as JSON object
console.log(makes sure we get username and password in functions)
Precreated object
*/


