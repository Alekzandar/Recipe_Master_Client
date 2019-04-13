import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-maressa-view',
  templateUrl: './maressa-view.component.html',
  styleUrls: ['./maressa-view.component.css']
})

export class MaressaViewComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log("Value:" + this.loginForm.get('password').value);
  }

}