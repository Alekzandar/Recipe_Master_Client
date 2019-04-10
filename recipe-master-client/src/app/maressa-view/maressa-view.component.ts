import { Component, OnInit } from '@angular/core';
import * as angular from 'angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-maressa-view',
  templateUrl: './maressa-view.component.html',
  styleUrls: ['./maressa-view.component.css'],

})

export class MaressaViewComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  ngOnInit() {
  }


  Users = [
    { username: 'Example1', password: '123'}

  ];

  constructor() {}

  checkIfEmpty(str: string ){
    if(str.length == 0 || str == null){
      this.message='Please do not leave fields blank!';
    }

    else{
      this.message='';
    }
  }

  login(){
      this.getUsers();
  }

  getUsers(){
    //this.userService.getUsers().subscribe(
      //data => {
        //this.users = data;
      var app = angular.module('myApp', []);
      app.controller('formCtrl', function($scope) {
        {{ $scope.Form.InputUsername.$valid }};
        {{ $scope.Form.InputPassword.$valid }};
        $scope.master={username: "testuser", password: "testpass"};
        $scope.reset=function() {
          $scope.user = angular.copy($scope.master);
          //checkIfEmpty();
        };
        $scope.reset();
      });

        console.log('got user data');

        //console.log(data);
      //},
      error => console.log('something wrong happened');
    //)
  }
}
// Create input fields for a username and password then button
/* At click create typescript functions to store data for those input fields
Store them as JSON object
console.log(//makes sure we get username and password in functions)
Precreated object
*/


